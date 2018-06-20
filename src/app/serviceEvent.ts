

export class ServiceEvent {

    AppName: string;

    Description: string;

    LogEntry: string;

    Type: number;

    Severity: number;

    constructor(description: string, 
                logentry: string, 
                type: number, 
                severity: number,
                appName: string) {

        this.Description = description;
        this.LogEntry = logentry;
        this.Type = type;
        this.Severity = severity;
        this.AppName = appName;
    }

  }
