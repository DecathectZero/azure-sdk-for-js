/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ProvisionedClustersPatch,
  HybridContainerServiceClient
} from "@azure/arm-hybridcontainerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates the Hybrid AKS provisioned cluster
 *
 * @summary Updates the Hybrid AKS provisioned cluster
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-09-01-preview/examples/UpdateProvisionedCluster.json
 */
async function updateProvisionedCluster() {
  const subscriptionId =
    process.env["HYBRIDCONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b";
  const resourceGroupName =
    process.env["HYBRIDCONTAINERSERVICE_RESOURCE_GROUP"] ||
    "test-arcappliance-resgrp";
  const resourceName = "test-hybridakscluster";
  const provisionedClusters: ProvisionedClustersPatch = {
    tags: { additionalProperties: "sample" }
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const result = await client.provisionedClustersOperations.beginUpdateAndWait(
    resourceGroupName,
    resourceName,
    provisionedClusters
  );
  console.log(result);
}

async function main() {
  updateProvisionedCluster();
}

main().catch(console.error);
