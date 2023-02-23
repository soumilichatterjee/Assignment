import UploadPhoto from '../components/ImageFetchingFromBackend/UploadPhoto';
import PhotoList from '../components/ImageFetchingFromBackend/PhotoList';

function PhotoScreenPage() {
  return (
    <div>
      <UploadPhoto />
      <PhotoList />
    </div>
  );
}

export default PhotoScreenPage;
