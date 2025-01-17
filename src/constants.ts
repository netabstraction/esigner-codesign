export const MACOS_JAVA_CONTENT_POSTFIX = 'Contents/Home';

export const UNIX = 'UNIX';
export const MACOS = 'MACOS';
export const WINDOWS = 'WINDOWS';
export const CODESIGNTOOL_VERSION = 'v1.2.7';

export const CODESIGNTOOL_WINDOWS_SETUP = `https://github.com/SSLcom/CodeSignTool/releases/download/${CODESIGNTOOL_VERSION}/CodeSignTool-${CODESIGNTOOL_VERSION}-windows.zip`;
export const CODESIGNTOOL_UNIX_SETUP = `https://github.com/SSLcom/CodeSignTool/releases/download/${CODESIGNTOOL_VERSION}/CodeSignTool-${CODESIGNTOOL_VERSION}.zip`;

export const CODESIGNTOOL_WINDOWS_RUN_CMD = 'CodeSignTool.bat';
export const CODESIGNTOOL_UNIX_RUN_CMD = 'CodeSignTool.sh';

export const ACTION_SIGN = 'sign';
export const ACTION_BATCH_SIGN = 'batch_sign';

export const SUPPORT_COMMANDS = new Map<string, string[]>([
    ['sign', ['username', 'password', 'credential_id', 'totp_secret', 'program_name', 'file_path', 'output_path', 'malware_block', 'override']],
    ['batch_sign', ['username', 'password', 'credential_id', 'totp_secret', 'program_name', 'dir_path', 'output_path']],
    ['scan_code', ['username', 'password', 'credential_id', 'program_name', 'file_path']]
]);

export const INPUT_COMMAND = 'command';
export const INPUT_USERNAME = 'username';
export const INPUT_PASSWORD = 'password';
export const INPUT_CREDENTIAL_ID = 'credential_id';
export const INPUT_TOTP_SECRET = 'totp_secret';
export const INPUT_PROGRAM_NAME = 'program_name';
export const INPUT_FILE_PATH = 'file_path';
export const INPUT_DIR_PATH = 'dir_path';
export const INPUT_OUTPUT_PATH = 'output_path';
export const INPUT_MALWARE_BLOCK = 'malware_block';
export const INPUT_OVERRIDE = 'override';
export const INPUT_CLEAN_LOGS = 'clean_logs';
export const INPUT_ENVIRONMENT_NAME = 'environment_name';
export const INPUT_JVM_MAX_MEMORY = 'jvm_max_memory';

export const PRODUCTION_ENVIRONMENT_NAME = 'PROD';
export const SANDBOX_ENVIRONMENT_NAME = 'TEST';
