import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box, Typography } from '@mui/material';
import CodeBlock from '../common/CodeBlock';
import ImageUploader from '../common/ImageUploader';

const PostEditor = ({ initialValues, onSubmit }) => {
  const [content, setContent] = useState(initialValues?.content || '');
  const [codeBlocks, setCodeBlocks] = useState(initialValues?.codeBlocks || []);

  const formik = useFormik({
    initialValues: {
      title: initialValues?.title || '',
      excerpt: initialValues?.excerpt || '',
      featuredImage: initialValues?.featuredImage || '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      excerpt: Yup.string().required('Excerpt is required'),
    }),
    onSubmit: (values) => {
      onSubmit({ ...values, content, codeBlocks 

      });
    }
  });

  const addCodeBlock = () => {
    setCodeBlocks([...codeBlocks, { language: 'javascript', code: '//Enter your code here' }]);
  };

  const updateCodeBlock = (index, field, value) => {
    const updated = [...codeBlocks];
    updated[index][field] = value;
    setCodeBlocks(updated);
  };

  const removeCodeBlock = (index) => {
    setCodeBlocks(codeBlocks.filter((_, i) => i !== index));
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'code-block'],
      ['clean'],
      [{ 'align': [] }]
    ],
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3}}>
      <TextField
        fullWidth
        variant="outlined"
        id="title"
        label="Title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        fullWidth
        variant="outlined"
        id="excerpt"
        multiline
        rows={3}
        label="Excerpt"
        name="excerpt"
        value={formik.values.excerpt}
        onChange={formik.handleChange}
        error={formik.touched.excerpt && Boolean(formik.errors.excerpt)}
        helperText={formik.touched.excerpt && formik.errors.excerpt}
        sx={{mb: 2}}
      />
      <Typography variant="h6" gutterBottom>Featured Image</Typography>
      <ImageUploader
        onImageUpload={(url) => formik.setFieldValue('featuredImage', url)}
      />

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Content</Typography>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
      />

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Code Blocks</Typography>
      <Button variant="outlined" onClick={addCodeBlock} sx={{ mb: 2 }}>
        Add Code Block
      </Button>

      {codeBlocks.map((block, index) => (
        <Box key={index} sx={{ mb: 3, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
          <TextField
            label="Language"
            value={block.language}
            onChange={(e) => updateCodeBlock(index, 'language', e.target.value)}
          />
          <TextField
            fullWidth
            label="Code"
            value={block.code}
            onChange={(e) => updateCodeBlock(index, 'code', e.target.value)}
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />

          <Typography variant="subtitle">Preview</Typography>

          <CodeBlock language={block.language} value={block.code} />
          <Button variant="outlined" color="error" onClick={() => removeCodeBlock(index)}>
            Remove Code Block
          </Button>
        </Box>
      ))}
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3}}>
        Save Post
      </Button>
    </Box>
  );
};

export default PostEditor;