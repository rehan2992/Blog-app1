// import React from 'react'
// import {Editor } from '@tinymce/tinymce-react';
// import {Controller } from 'react-hook-form';


// export default function RTE({name, control, label, defaultValue =""}) {
//   return (
//     <div className='w-full'> 
//     {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

//     <Controller
//     name={name || "content"}
//     control={control}
//     render={({field: {onChange}}) => (
//         <Editor
//         apiKey="haoyuybdegqjbjommp4hrxw2iah8qiu69aayrwe1b7ocwvlk"
//         initialValue={defaultValue}
//         init={{
//             initialValue: defaultValue,
//             height: 500,
//             menubar: true,
//             plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//             ],
//             toolbar:
//             "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
//         }}
//         onEditorChange={onChange}
//         />
//     )}
//     />

//      </div>
//   )
// }



import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

// TinyMCE core & theme
import 'tinymce/tinymce';
import 'tinymce/themes/silver/theme';
import 'tinymce/icons/default/icons';
import 'tinymce/skins/ui/oxide/skin.min.css';

// ✅ All plugins used in your init
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';
import 'tinymce/plugins/code';
import 'tinymce/plugins/image';
import 'tinymce/plugins/media';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/wordcount';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey="" // disables TinyMCE cloud check
            initialValue={defaultValue}
            value={value}
            onEditorChange={onChange}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'wordcount'
              ],
              toolbar:
                'undo redo | blocks | bold italic forecolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | link image media | ' +
                'removeformat | code fullscreen | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        )}
      />
    </div>
  );
}
