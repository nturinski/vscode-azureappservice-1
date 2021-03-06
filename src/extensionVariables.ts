/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ExtensionContext, OutputChannel, TreeView } from "vscode";
import { AzureTreeDataProvider, AzureTreeItem, IAzureUserInput, ITelemetryReporter } from "vscode-azureextensionui";

/**
 * Namespace for common variables used throughout the extension. They must be initialized in the activate() method of extension.ts
 */
export namespace ext {
    export let tree: AzureTreeDataProvider;
    export let outputChannel: OutputChannel;
    export let ui: IAzureUserInput;
    export let reporter: ITelemetryReporter;
    export let context: ExtensionContext;
    export let treeView: TreeView<AzureTreeItem>;
}
