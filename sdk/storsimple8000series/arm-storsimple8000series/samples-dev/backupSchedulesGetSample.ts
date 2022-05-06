/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorSimple8000SeriesManagementClient } from "@azure/arm-storsimple8000series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the properties of the specified backup schedule name.
 *
 * @summary Gets the properties of the specified backup schedule name.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/BackupSchedulesGet.json
 */
async function backupSchedulesGet() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "Device05ForSDKTest";
  const backupPolicyName = "BkUpPolicy01ForSDKTest";
  const backupScheduleName = "schedule2";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.backupSchedules.get(
    deviceName,
    backupPolicyName,
    backupScheduleName,
    resourceGroupName,
    managerName
  );
  console.log(result);
}

backupSchedulesGet().catch(console.error);
