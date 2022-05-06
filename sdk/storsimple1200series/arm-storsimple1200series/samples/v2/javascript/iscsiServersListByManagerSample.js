/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorSimpleManagementClient } = require("@azure/arm-storsimple1200series");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves all the iSCSI servers in a manager.
 *
 * @summary Retrieves all the iSCSI servers in a manager.
 * x-ms-original-file: specification/storSimple1200Series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/IscsiServersListByManager.json
 */
async function iscsiServersListByManager() {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.iscsiServers.listByManager(resourceGroupName, managerName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

iscsiServersListByManager().catch(console.error);
