import { Bounce, ToastContainer, toast } from "react-toastify";

function ShowToastComponent() {
  const showToast = () => {
    toast.info(
      <div className=''>
        <i className='bi bi-download ' style={{ marginRight: "8px" }} />
        {"   "}جاري تحميل الملف...
      </div>,
      {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        icon: false,
        transition: Bounce,
      }
    );
  };

  return (
    <>
      <button className='btn btn-light' onClick={showToast}>
        <i className='bi bi-download text-info'></i>
      </button>

      <ToastContainer />
    </>
  );
}

export default ShowToastComponent;
