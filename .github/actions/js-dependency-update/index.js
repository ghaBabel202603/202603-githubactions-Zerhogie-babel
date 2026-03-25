const core = require('@actions/core');

async function run() {
  // Write to the action output logs
  core.info('I am a custom JS action');
}

// Execute the action entrypoint
run();
