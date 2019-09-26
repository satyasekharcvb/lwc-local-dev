#LWC Local Development
##Steps to use the code

1. If you haven't already done so, authenticate with your org. You can do it by using **SFDX: Authorize an Org** from the command pallete.

2. Clone the repository into your local system by using the following command in the Terminal. 
   `git clone https://github.com/satyasekharcvb/lwc-local-dev.git` 
   `cd lwc-local-dev`

3. Start your Local Development server from your terminal in the lwc-local-dev folder using the command.
    `sfdx force:lightning:lwc:start`

4. You can open the local development interface in the browser by clicking the local host url(e.g. https://localhost:3333) in the terminal log

4. Make any changes to the code and see it dynamicall refreshed in the browser

5. You can also deploy the code to your org by using **SFDX: Deploy This Source to org**
