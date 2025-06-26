import { PlusOutlined } from '@ant-design/icons'
import { Upload } from 'antd'
import React from 'react'
import { Accesskey, key } from '../api/key';
import { useAuth } from '../context/authSate';

export default function UploadImage({handleChange, fileList}:any) {

    const token = useAuth((state:any)=>state.token) as any

    const api = Accesskey(token)


    const customAxiosRequest = async (options:any) => {
        const { onSuccess, onError, file, onProgress, data, headers } = options;
      
        const formData = new FormData();
        formData.append('file', file);
        if (data) {
          Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
          });
        }
      
        try {
          const response = await api.post(options.action, formData, {
            headers,
            onUploadProgress: (event:any) => {
      
              if (event.event?.lengthComputable) {
      
                onProgress({ percent: Math.round((event.loaded / event.total) * 100) }, file);
              }
            }
          });
        
       
          onSuccess(response.data, file);
        } catch (error) {
          onError(error);
        }
      };

    const uploadProps = {
        name: 'file',
        listType:"picture-card",
        maxCount:1,
        action:key.BACK_ENDURL + "category/upload",// Your NestJS endpoint
        customRequest: customAxiosRequest, // your custom axios request function
        onChange: handleChange,
        fileList: fileList,
        showUploadList: {
          showPreviewIcon: false,
          showRemoveIcon: true,
      
        },
        progress: {
          strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
          },
          strokeWidth: 4,
         
        },
      } as any


  return  <Upload
  {...uploadProps}
  >
<div>
          <PlusOutlined />
          <div style={{ marginTop: 20 }}>Upload</div>
        </div>

  </Upload>
}
