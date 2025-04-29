# gcloud_fn_helloworld

This project demonstrates a simple "Hello, World!" Google Cloud Function.

## Step-by-Step Instructions

### 1. Prerequisites
- Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install).
- Ensure you have a Google Cloud project set up. Note the project ID.
- Enable the **Cloud Functions API** for your project.
- Install Node.js (if not already installed).

### 2. Clone the Repository
```bash
git clone <repository-url>
cd gcloud_fn_helloworld
```

### 3. Write the Function Code
Create an `helloApi.js` file with the following content:
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Adapter for Google Cloud Functions
const server = app;
exports.helloApi = (req, res) => {
    server(req, res);
};
```

Create a `package.json` file with the following content:
```json
{
    "name": "gcloud-fn-helloworld",
    "version": "1.0.0",
    "main": "index.js",
    "dependencies": {}
}
```

### 4. Deploy the Function

### 4.1. Deploy Using Google CLI

Run the following command to deploy the function:
```bash
gcloud functions deploy helloWorld \
    --runtime nodejs18 \
    --trigger-http \
    --allow-unauthenticated \
    --project <your-project-id>
```
Replace `<your-project-id>` with your actual Google Cloud project ID.

### 4.1. Deploy Using Google Cloud Console

Alternatively, you can deploy the function using the Google Cloud Console:

1. Navigate to the [Cloud Functions page](https://console.cloud.google.com/functions) in the Google Cloud Console.
2. Click **Create Function**.
3. Enter a name for your function (e.g., `helloWorld`).
4. Select **HTTP** as the trigger type and check the box for **Allow unauthenticated invocations**.
5. Under the **Source** section, choose **Repository**.
6. Connect your GitHub repository if not already connected.
7. Select the repository and branch containing your function code.
8. Specify the entry point as `helloApi`.
9. Choose the runtime as `Node.js 18`.
10. Click **Deploy**.

Once deployed, the function's URL will be displayed. Use this URL to test your function as described in Step 5.

### 5. Test the Function
After deployment, note the URL provided in the output. Test the function by visiting the URL in your browser or using `curl`:
```bash
curl <function-url>
```
Replace `<function-url>` with the URL of your deployed function.

### 6. Clean Up
To avoid incurring charges, delete the deployed function when no longer needed:
```bash
gcloud functions delete helloWorld --project <your-project-id>
```