const userUrl = "http://localhost:3000/users";
export const getUsers = (userEmail: string) => {
  return fetch(userUrl)
    .then((res) => res.json())
    .then((users) => {
      // Find the user with the given userEmail
      const user = users.find((user: any) => user.email === userEmail);
      return user;
    });
};

export const addUser = async (newUser: User) => {
  try {
    // Fetch all users
    const users = await getAllUsers();

    // Determine the next ID based on the length of the users array
    const nextId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    // Set the ID of the new user
    newUser.id = nextId;

    // Add the new user with the updated ID
    const response = await fetch(userUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Failed to add user");
    }

    // Parse the response data
    const data = await response.json();
    console.log("User added successfully:", data);
    return data; // return the added user data
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

export const getAllUsers = () => {
  return fetch(userUrl).then((res) => res.json());
};

const productUrl = "http://localhost:3000/productsResponse";

export const getProducts = () => {
  return fetch(productUrl).then((res) => res.json());
};

export const getProductsByCategory = (category: string) => {
  return fetch(productUrl)
    .then((res) => res.json())
    .then((data) => {
      // Filter products based on the given category
      const products = data.products.filter(
        (product: Product) => product.category === category
      );
      return products;
    });
};
export const changeDiscount = async (newDiscount: number) => {
  try {
    const discountUrl = "http://localhost:3000/others";

    // Fetch the current discount object
    const response = await fetch(discountUrl);
    const currentDiscount = await response.json();

    // Update the discount value
    currentDiscount.discount = newDiscount;

    // Send a PATCH request to update the discount object
    const updateResponse = await fetch(discountUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentDiscount),
    });

    // Check if the request was successful
    if (!updateResponse.ok) {
      throw new Error("Failed to update discount");
    }

    // Parse the response data
    const data = await updateResponse.json();
    console.log("Discount updated successfully:", data);
    return data; // return the updated discount data
  } catch (error) {
    console.error("Error updating discount:", error);
    throw error;
  }
};

const othersUrl = "http://localhost:3000/others";

export const getDiscount = () => {
  return fetch(othersUrl)
    .then((res) => res.json())
    .then((data) => {
      // Extract and return the discount value
      return data.discount;
    });
};
