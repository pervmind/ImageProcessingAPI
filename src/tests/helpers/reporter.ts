import {
  DisplayProcessor,
  SpecReporter,
  // eslint-disable-next-line comma-dangle
  StacktraceOption,
} from 'jasmine-spec-reporter';
import SuiteInfo = jasmine.JasmineStartedInfo;

class CustomProcessor extends DisplayProcessor {
  // eslint-disable-next-line @typescript-eslint/space-before-function-paren
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      // eslint-disable-next-line comma-dangle
      displayStacktrace: StacktraceOption.NONE,
    },
    // eslint-disable-next-line comma-dangle
    customProcessors: [CustomProcessor],
  })
);
