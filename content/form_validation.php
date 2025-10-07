<!DOCTYPE HTML>
<html>
<head>
    <title>PHP Form Validation Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h2 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }
        input[type="text"], textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            box-sizing: border-box;
        }
        textarea {
            resize: vertical;
            min-height: 100px;
        }
        .radio-group {
            display: flex;
            gap: 20px;
            margin-top: 5px;
        }
        .radio-group input[type="radio"] {
            width: auto;
            margin-right: 5px;
        }
        .radio-group label {
            display: inline;
            font-weight: normal;
            margin-bottom: 0;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        .output {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin-top: 20px;
            border-left: 4px solid #4CAF50;
        }
        .output h2 {
            color: #4CAF50;
            margin-bottom: 15px;
        }
        .output p {
            margin: 5px 0;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        .output p:last-child {
            border-bottom: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php
        // define variables and set to empty values
        $name = $email = $gender = $comment = $website = "";
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = test_input($_POST["name"]);
            $email = test_input($_POST["email"]);
            $website = test_input($_POST["website"]);
            $comment = test_input($_POST["comment"]);
            $gender = test_input($_POST["gender"]);
        }
        
        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
        ?>
        
        <h2>PHP Form Validation Example</h2>
        
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" value="<?php echo $name; ?>">
            </div>
            
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="text" name="email" id="email" value="<?php echo $email; ?>">
            </div>
            
            <div class="form-group">
                <label for="website">Website:</label>
                <input type="text" name="website" id="website" value="<?php echo $website; ?>">
            </div>
            
            <div class="form-group">
                <label for="comment">Comment:</label>
                <textarea name="comment" id="comment" rows="5" cols="40"><?php echo $comment; ?></textarea>
            </div>
            
            <div class="form-group">
                <label>Gender:</label>
                <div class="radio-group">
                    <input type="radio" name="gender" value="female" id="female" <?php if ($gender == "female") echo "checked"; ?>>
                    <label for="female">Female</label>
                    
                    <input type="radio" name="gender" value="male" id="male" <?php if ($gender == "male") echo "checked"; ?>>
                    <label for="male">Male</label>
                    
                    <input type="radio" name="gender" value="other" id="other" <?php if ($gender == "other") echo "checked"; ?>>
                    <label for="other">Other</label>
                </div>
            </div>
            
            <input type="submit" name="submit" value="Submit">
        </form>
        
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            echo "<div class='output'>";
            echo "<h2>Your Input:</h2>";
            echo "<p><strong>Name:</strong> " . $name . "</p>";
            echo "<p><strong>Email:</strong> " . $email . "</p>";
            echo "<p><strong>Website:</strong> " . $website . "</p>";
            echo "<p><strong>Comment:</strong> " . $comment . "</p>";
            echo "<p><strong>Gender:</strong> " . $gender . "</p>";
            echo "</div>";
        }
        ?>
    </div>
</body>
</html>
