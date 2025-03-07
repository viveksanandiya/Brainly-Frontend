import Swal from "sweetalert2";

//Success Alert
export const showSuccessAlert = (message: string) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1000
    });
};

//Error Alert
export const showErrorAlert = (message: string) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1000
    });
};

//Warning Alert
export const showWarningAlert = (message: string) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1000
    });
};

//Confirm Dialog
export const showConfirmAlert = async (message: string) => {
    
    return Swal.fire({
        text: message,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
    });
};
