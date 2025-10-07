# Node.js MySQL CRUD Application

This application demonstrates CRUD (Create, Read, Update, Delete) operations on a MySQL database using Node.js and Express.

## Prerequisites

Before running this application, make sure you have the following installed:

1. **Node.js** (version 14 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node -v`

2. **MySQL Server**
   - Download from [mysql.com](https://dev.mysql.com/downloads/mysql/)
   - Install and set up MySQL server
   - Note: Default password in code is "vaishu" - change this in `conn.js` if needed

3. **MySQL Workbench** (optional but recommended)
   - Download from [mysql.com](https://dev.mysql.com/downloads/workbench/)

## Installation

1. Navigate to the project directory:
   ```bash
   cd ex10/nodemysql
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Database Setup

1. Start your MySQL server
2. Open MySQL Workbench or command line
3. Create a user account or use root with password "vaishu"
4. The application will create the database and tables automatically

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

2. Open your browser and visit: `http://localhost:3000`

## API Endpoints

### Database Operations
- `GET /createproduct` - Creates the 'product' database
- `GET /connectproduct` - Connects to the 'product' database

### Table Operations
- `GET /createchocolates` - Creates the 'chocolates' table
- `GET /createstat` - Creates the 'stationary' table

### CRUD Operations

#### Create (Insert)
- `GET /chocolate1` - Inserts a chocolate (Nutties, ₹100)
- `GET /stationary1` - Inserts a stationary item (Poster Colours, ₹500)

#### Read (Select)
- `GET /getchocolates` - Retrieves all chocolates
- `GET /getstat` - Retrieves all stationary items

#### Update
- `GET /updatechoco/:pid` - Updates chocolate name to 'Diary Milk' for given product ID
  - Example: `http://localhost:3000/updatechoco/1`

#### Delete
- `GET /deletechoco/:pid` - Deletes chocolate with given product ID
  - Example: `http://localhost:3000/deletechoco/1`

## Database Schema

### Chocolates Table
```sql
CREATE TABLE chocolates(
    pid int AUTO_INCREMENT,
    name VARCHAR(30),
    price integer,
    PRIMARY KEY(pid)
);
```

### Stationary Table
```sql
CREATE TABLE stationary(
    pid int AUTO_INCREMENT,
    name VARCHAR(30),
    price integer,
    PRIMARY KEY(pid)
);
```

## Testing the Application

1. **Setup Database and Tables:**
   - Visit `http://localhost:3000/createproduct`
   - Visit `http://localhost:3000/connectproduct`
   - Visit `http://localhost:3000/createchocolates`
   - Visit `http://localhost:3000/createstat`

2. **Insert Data:**
   - Visit `http://localhost:3000/chocolate1`
   - Visit `http://localhost:3000/stationary1`

3. **View Data:**
   - Visit `http://localhost:3000/getchocolates`
   - Visit `http://localhost:3000/getstat`

4. **Update Data:**
   - Visit `http://localhost:3000/updatechoco/1` (replace 1 with actual product ID)

5. **Delete Data:**
   - Visit `http://localhost:3000/deletechoco/1` (replace 1 with actual product ID)

## Configuration

To change the MySQL connection settings, edit the `connection` object in `conn.js`:

```javascript
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vaishu",  // Change this to your MySQL password
    database: "product"  // This will be added after database creation
});
```

## Troubleshooting

1. **Connection Error:** Make sure MySQL server is running and credentials are correct
2. **Port Already in Use:** Change the port number in `app.listen('3000', ...)` if 3000 is occupied
3. **Module Not Found:** Run `npm install` to install dependencies
4. **Database Access Denied:** Check MySQL user permissions

## Project Structure

```
nodemysql/
├── conn.js          # Main application file
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

## Features

- ✅ MySQL database connection
- ✅ Database creation
- ✅ Table creation (chocolates and stationary)
- ✅ Insert operations
- ✅ Select operations
- ✅ Update operations
- ✅ Delete operations
- ✅ Error handling
- ✅ JSON responses for data retrieval
- ✅ Web interface for easy testing
