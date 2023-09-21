// Sample customer data
const customers = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", phone: "123-456-7890", country: "USA", status: "Active" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", phone: "987-654-3210", country: "Canada", status: "Inactive" }
];

const customerList = document.getElementById("customer-list");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("close-popup");
const addCustomerBtn = document.getElementById("add-customer-btn");
const addCustomerForm = document.getElementById("add-customer-form");
const saveCustomerBtn = document.getElementById("save-customer");

// Function to display customers in the table
function displayCustomers() {
    customerList.innerHTML = ""; // Clear existing data

    customers.forEach((customer) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="profile.jpg" alt="Profile Image"></td>
            <td>${customer.firstName}</td>
            <td>${customer.lastName}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.country}</td>
            <td>${customer.status}</td>
        `;

        row.addEventListener("click", () => openPopup(customer));
        customerList.appendChild(row);
    });
}

// Function to open the popup with additional customer info
function openPopup(customer) {
    const popupContent = `
        <h2>Customer Details</h2>
        <p>ID: ${customer.id}</p>
        <p>Address: 123 Main St, Anytown</p>
        <p>Website: <a href="#">www.example.com</a></p>
        <p>Age: 30</p>
    `;

    popup.innerHTML = popupContent;
    popup.style.display = "block";

    closePopupBtn.addEventListener("click", closePopup);
}

// Function to close the popup
function closePopup() {
    popup.style.display = "none";
}

// Function to show the add customer form
function showAddCustomerForm() {
    addCustomerForm.style.display = "block";
}

// Function to save a new customer
function saveCustomer() {
    // Retrieve customer data from the form and add it to the customers array
    const newCustomer = {
        id: customers.length + 1,
        firstName: "New",
        lastName: "Customer",
        email: "new@example.com",
        phone: "555-555-5555",
        country: "New Country",
        status: "Pending"
    };

    customers.push(newCustomer);
    displayCustomers();
    addCustomerForm.style.display = "none";
}

// Event listeners
addCustomerBtn.addEventListener("click", showAddCustomerForm);
saveCustomerBtn.addEventListener("click", saveCustomer);

// Initial display
displayCustomers();
