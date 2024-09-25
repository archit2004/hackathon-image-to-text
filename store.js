function filterMedicines() {
    const filterValue = document.getElementById("petFilter").value;
    const medicines = document.querySelectorAll(".medicine");

    medicines.forEach(medicine => {
        if (filterValue === "all" || medicine.dataset.type === filterValue) {
            medicine.style.display = "block";
        } else {
            medicine.style.display = "none";
        }
    });
}
