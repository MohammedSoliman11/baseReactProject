import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface ShowToastComponentProps {
  id: number;
}

const ShowToastComponent: React.FC<ShowToastComponentProps> = ({ id }) => {
  
  const handleExportPDF = async () => {
    const row = document.getElementById(`row-${id}`);
    console.log("id : ", id);
    console.log(row);
    if (row) {
      const pdf = new jsPDF();
      const input = row as HTMLElement;
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 150, pdfWidth, pdfHeight);
      pdf.save(`all_rows.pdf`);
    } else {
      console.error(`No rows found.`);
    }
  };

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
    handleExportPDF();
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
