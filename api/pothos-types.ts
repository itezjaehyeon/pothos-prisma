/* eslint-disable */
import type { Prisma, Admin, ContractLog, Event, EventParticipant, EventParticipantSurvey, EventReviewAnswer, EventReviewQuestion, EventSchedule, EventSurvey, Partner, PartnerInfo, PhoneVerification, SiteInformation, SurveyBanner, User } from "@prisma/client";
export default interface PrismaTypes {
    Admin: {
        Name: "Admin";
        Shape: Admin;
        Include: never;
        Select: Prisma.AdminSelect;
        OrderBy: Prisma.AdminOrderByWithRelationInput;
        WhereUnique: Prisma.AdminWhereUniqueInput;
        Where: Prisma.AdminWhereInput;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    ContractLog: {
        Name: "ContractLog";
        Shape: ContractLog;
        Include: Prisma.ContractLogInclude;
        Select: Prisma.ContractLogSelect;
        OrderBy: Prisma.ContractLogOrderByWithRelationInput;
        WhereUnique: Prisma.ContractLogWhereUniqueInput;
        Where: Prisma.ContractLogWhereInput;
        RelationName: "partner";
        ListRelations: never;
        Relations: {
            partner: {
                Shape: Partner;
                Types: PrismaTypes["Partner"];
            };
        };
    };
    Event: {
        Name: "Event";
        Shape: Event;
        Include: Prisma.EventInclude;
        Select: Prisma.EventSelect;
        OrderBy: Prisma.EventOrderByWithRelationInput;
        WhereUnique: Prisma.EventWhereUniqueInput;
        Where: Prisma.EventWhereInput;
        RelationName: "partner" | "eventParticipant" | "eventReviewQuestion" | "eventSchedule" | "eventSurvey";
        ListRelations: "eventParticipant" | "eventReviewQuestion" | "eventSchedule" | "eventSurvey";
        Relations: {
            partner: {
                Shape: Partner;
                Types: PrismaTypes["Partner"];
            };
            eventParticipant: {
                Shape: EventParticipant[];
                Types: PrismaTypes["EventParticipant"];
            };
            eventReviewQuestion: {
                Shape: EventReviewQuestion[];
                Types: PrismaTypes["EventReviewQuestion"];
            };
            eventSchedule: {
                Shape: EventSchedule[];
                Types: PrismaTypes["EventSchedule"];
            };
            eventSurvey: {
                Shape: EventSurvey[];
                Types: PrismaTypes["EventSurvey"];
            };
        };
    };
    EventParticipant: {
        Name: "EventParticipant";
        Shape: EventParticipant;
        Include: Prisma.EventParticipantInclude;
        Select: Prisma.EventParticipantSelect;
        OrderBy: Prisma.EventParticipantOrderByWithRelationInput;
        WhereUnique: Prisma.EventParticipantWhereUniqueInput;
        Where: Prisma.EventParticipantWhereInput;
        RelationName: "event" | "user" | "eventParticipantSurvey" | "eventReviewAnswer";
        ListRelations: "eventParticipantSurvey" | "eventReviewAnswer";
        Relations: {
            event: {
                Shape: Event;
                Types: PrismaTypes["Event"];
            };
            user: {
                Shape: User | null;
                Types: PrismaTypes["User"];
            };
            eventParticipantSurvey: {
                Shape: EventParticipantSurvey[];
                Types: PrismaTypes["EventParticipantSurvey"];
            };
            eventReviewAnswer: {
                Shape: EventReviewAnswer[];
                Types: PrismaTypes["EventReviewAnswer"];
            };
        };
    };
    EventParticipantSurvey: {
        Name: "EventParticipantSurvey";
        Shape: EventParticipantSurvey;
        Include: Prisma.EventParticipantSurveyInclude;
        Select: Prisma.EventParticipantSurveySelect;
        OrderBy: Prisma.EventParticipantSurveyOrderByWithRelationInput;
        WhereUnique: Prisma.EventParticipantSurveyWhereUniqueInput;
        Where: Prisma.EventParticipantSurveyWhereInput;
        RelationName: "eventParticipant";
        ListRelations: never;
        Relations: {
            eventParticipant: {
                Shape: EventParticipant;
                Types: PrismaTypes["EventParticipant"];
            };
        };
    };
    EventReviewAnswer: {
        Name: "EventReviewAnswer";
        Shape: EventReviewAnswer;
        Include: Prisma.EventReviewAnswerInclude;
        Select: Prisma.EventReviewAnswerSelect;
        OrderBy: Prisma.EventReviewAnswerOrderByWithRelationInput;
        WhereUnique: Prisma.EventReviewAnswerWhereUniqueInput;
        Where: Prisma.EventReviewAnswerWhereInput;
        RelationName: "EventParticipant";
        ListRelations: never;
        Relations: {
            EventParticipant: {
                Shape: EventParticipant;
                Types: PrismaTypes["EventParticipant"];
            };
        };
    };
    EventReviewQuestion: {
        Name: "EventReviewQuestion";
        Shape: EventReviewQuestion;
        Include: Prisma.EventReviewQuestionInclude;
        Select: Prisma.EventReviewQuestionSelect;
        OrderBy: Prisma.EventReviewQuestionOrderByWithRelationInput;
        WhereUnique: Prisma.EventReviewQuestionWhereUniqueInput;
        Where: Prisma.EventReviewQuestionWhereInput;
        RelationName: "event";
        ListRelations: never;
        Relations: {
            event: {
                Shape: Event;
                Types: PrismaTypes["Event"];
            };
        };
    };
    EventSchedule: {
        Name: "EventSchedule";
        Shape: EventSchedule;
        Include: Prisma.EventScheduleInclude;
        Select: Prisma.EventScheduleSelect;
        OrderBy: Prisma.EventScheduleOrderByWithRelationInput;
        WhereUnique: Prisma.EventScheduleWhereUniqueInput;
        Where: Prisma.EventScheduleWhereInput;
        RelationName: "event";
        ListRelations: never;
        Relations: {
            event: {
                Shape: Event;
                Types: PrismaTypes["Event"];
            };
        };
    };
    EventSurvey: {
        Name: "EventSurvey";
        Shape: EventSurvey;
        Include: Prisma.EventSurveyInclude;
        Select: Prisma.EventSurveySelect;
        OrderBy: Prisma.EventSurveyOrderByWithRelationInput;
        WhereUnique: Prisma.EventSurveyWhereUniqueInput;
        Where: Prisma.EventSurveyWhereInput;
        RelationName: "event";
        ListRelations: never;
        Relations: {
            event: {
                Shape: Event;
                Types: PrismaTypes["Event"];
            };
        };
    };
    Partner: {
        Name: "Partner";
        Shape: Partner;
        Include: Prisma.PartnerInclude;
        Select: Prisma.PartnerSelect;
        OrderBy: Prisma.PartnerOrderByWithRelationInput;
        WhereUnique: Prisma.PartnerWhereUniqueInput;
        Where: Prisma.PartnerWhereInput;
        RelationName: "contractLog" | "event" | "partnerInfo";
        ListRelations: "contractLog" | "event";
        Relations: {
            contractLog: {
                Shape: ContractLog[];
                Types: PrismaTypes["ContractLog"];
            };
            event: {
                Shape: Event[];
                Types: PrismaTypes["Event"];
            };
            partnerInfo: {
                Shape: PartnerInfo | null;
                Types: PrismaTypes["PartnerInfo"];
            };
        };
    };
    PartnerInfo: {
        Name: "PartnerInfo";
        Shape: PartnerInfo;
        Include: Prisma.PartnerInfoInclude;
        Select: Prisma.PartnerInfoSelect;
        OrderBy: Prisma.PartnerInfoOrderByWithRelationInput;
        WhereUnique: Prisma.PartnerInfoWhereUniqueInput;
        Where: Prisma.PartnerInfoWhereInput;
        RelationName: "partner";
        ListRelations: never;
        Relations: {
            partner: {
                Shape: Partner;
                Types: PrismaTypes["Partner"];
            };
        };
    };
    PhoneVerification: {
        Name: "PhoneVerification";
        Shape: PhoneVerification;
        Include: never;
        Select: Prisma.PhoneVerificationSelect;
        OrderBy: Prisma.PhoneVerificationOrderByWithRelationInput;
        WhereUnique: Prisma.PhoneVerificationWhereUniqueInput;
        Where: Prisma.PhoneVerificationWhereInput;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    SiteInformation: {
        Name: "SiteInformation";
        Shape: SiteInformation;
        Include: never;
        Select: Prisma.SiteInformationSelect;
        OrderBy: Prisma.SiteInformationOrderByWithRelationInput;
        WhereUnique: Prisma.SiteInformationWhereUniqueInput;
        Where: Prisma.SiteInformationWhereInput;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    SurveyBanner: {
        Name: "SurveyBanner";
        Shape: SurveyBanner;
        Include: never;
        Select: Prisma.SurveyBannerSelect;
        OrderBy: Prisma.SurveyBannerOrderByWithRelationInput;
        WhereUnique: Prisma.SurveyBannerWhereUniqueInput;
        Where: Prisma.SurveyBannerWhereInput;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        RelationName: "eventParticipant";
        ListRelations: "eventParticipant";
        Relations: {
            eventParticipant: {
                Shape: EventParticipant[];
                Types: PrismaTypes["EventParticipant"];
            };
        };
    };
}