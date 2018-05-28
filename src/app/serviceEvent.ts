

export class ServiceEvent {

    Description: string;

    LogEntry: string;

    Type: number;

    Severity: number;

    constructor(description: string, logentry: string, type: number, severity: number) {

        this.Description = description;
        this.LogEntry = logentry;
        this.Type = type;
        this.Severity = severity;
    }

  }
