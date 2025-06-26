import { useEffect, useState } from "react";
import { Accesskey, key } from "../../api/key";
import { useAuth } from "../../context/authSate";
import { UploadFile } from "antd";

const useUploadRequest = (data: any) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  

  useEffect(() => {    

    // Set fileList when data is available
    data && setFileList([{
      uid: '-1',
      name: 'product_img',
      status: 'done',
      url: data?.product_img?.url,
    }]);
  }, [data]);

  

  const token = useAuth((state: any) => state.token) as string;
  const api = Accesskey(token);

  const customAxiosRequest = async (options: any) => {
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
        onUploadProgress: (event: any) => {
          if (event.lengthComputable) {
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
    listType: "picture-card",
    maxCount: 1,
    action: key.BACK_ENDURL + "category/upload",
    customRequest: customAxiosRequest,
    onChange: handleChange,
    fileList,
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
  } as any;

  // Function to handle changes in the file list
  function handleChange(info: any) {
    setFileList([...info.fileList]);

    if (info.file.status === 'done') {
      // Handle successful upload
    } else if (info.file.status === 'error') {
      // Handle upload error
    }
  }

  return { uploadProps };
};

export { useUploadRequest };
