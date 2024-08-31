export type UploadButtonStatus = 'default' | 'uploading' | 'completed' | 'failed';

export type UploadButton = {
  status: UploadButtonStatus;
  label: string;
  disabled: boolean;
  icon: string;
  color: string;
};

export type UploadButtonVariant = {
  status: UploadButtonStatus;
};
