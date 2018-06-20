

export class ServiceEvent {

    AppName: string;

    Description: string;

    LogEntry: string;

    Type: number;

    Severity: number;

    CreateDate: Date;

    constructor(description: string, 
                logentry: string, 
                type: number, 
                severity: number,
                appName: string,
                createDate: Date) {

        this.Description = description;
        this.LogEntry = logentry;
        this.Type = type;
        this.Severity = severity;
        this.AppName = appName;
        this.CreateDate = createDate;
    }

  }
