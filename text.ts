export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","loginId":"t.exposeString(\"loginId\")","password":"t.exposeString(\"password\")","createdAt":"t.exposeDateTime(\"createdAt\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","partnerId":"t.exposeInt(\"partnerId\")","expiredAt":"t.exposeDateTime(\"expiredAt\")","createdAt":"t.exposeDateTime(\"createdAt\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeString(\"id\")","partnerId":"t.exposeInt(\"partnerId\")","posterImageInternal":"t.exposeString(\"posterImageInternal\")","eventName":"t.exposeString(\"eventName\")","hostInfo":"t.exposeString(\"hostInfo\")","applyStartAt":"t.exposeDateTime(\"applyStartAt\")","applyEndAt":"t.exposeDateTime(\"applyEndAt\")","address":"t.exposeString(\"address\")","addressDetail":"t.exposeString(\"addressDetail\")","contactTel":"t.exposeString(\"contactTel\")","maxApplyCount":"t.exposeInt(\"maxApplyCount\")","canEnterBeforeMinute":"t.exposeInt(\"canEnterBeforeMinute\")","isApproveNeeded":"t.exposeBoolean(\"isApproveNeeded\")","isActive":"t.exposeBoolean(\"isActive\")","description":"t.exposeString(\"description\")","createdAt":"t.exposeDateTime(\"createdAt\")","modifiedAt":"t.exposeDateTime(\"modifiedAt\")","eventStartAt":"t.exposeDateTime(\"eventStartAt\")","eventEndAt":"t.exposeDateTime(\"eventEndAt\")","isReviewNoticeSent":"t.exposeBoolean(\"isReviewNoticeSent\")","termsOfUseHtmlInternal":"t.exposeString(\"termsOfUseHtmlInternal\")","privacyHtmlInternal":"t.exposeString(\"privacyHtmlInternal\")","termsOfMarketingHtmlInternal":"t.exposeString(\"termsOfMarketingHtmlInternal\")","bCode":"t.exposeString(\"bCode\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","eventId":"t.exposeString(\"eventId\")","userId":"t.exposeString(\"userId\")","name":"t.exposeString(\"name\")","phone":"t.exposeString(\"phone\")","age":"t.exposeInt(\"age\")","allowMarketing":"t.exposeBoolean(\"allowMarketing\")","createdAt":"t.exposeDateTime(\"createdAt\")","lastCheckedAt":"t.exposeDateTime(\"lastCheckedAt\")","canWriteReviewAt":"t.exposeDateTime(\"canWriteReviewAt\")","writeReviewAt":"t.exposeDateTime(\"writeReviewAt\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","eventParticipantId":"t.exposeInt(\"eventParticipantId\")","eventSurveyId":"t.exposeInt(\"eventSurveyId\")","question":"t.exposeString(\"question\")","answerInternal":"t.exposeString(\"answerInternal\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","eventParticipantId":"t.exposeInt(\"eventParticipantId\")","eventReviewQuestionId":"t.exposeInt(\"eventReviewQuestionId\")","question":"t.exposeString(\"question\")","score":"t.exposeInt(\"score\")","answer":"t.exposeString(\"answer\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","eventId":"t.exposeString(\"eventId\")","title":"t.exposeString(\"title\")","description":"t.exposeString(\"description\")","sortOrder":"t.exposeInt(\"sortOrder\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","eventId":"t.exposeString(\"eventId\")","startAt":"t.exposeDateTime(\"startAt\")","endAt":"t.exposeDateTime(\"endAt\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","eventId":"t.exposeString(\"eventId\")","title":"t.exposeString(\"title\")","description":"t.exposeString(\"description\")","selectDataInternal":"t.exposeString(\"selectDataInternal\")","sortOrder":"t.exposeInt(\"sortOrder\")","isRequired":"t.exposeBoolean(\"isRequired\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","loginId":"t.exposeString(\"loginId\")","password":"t.exposeString(\"password\")","createdAt":"t.exposeDateTime(\"createdAt\")","expiredAt":"t.exposeDateTime(\"expiredAt\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"partnerId":"t.exposeInt(\"partnerId\")","companyName":"t.exposeString(\"companyName\")","companyNumber":"t.exposeString(\"companyNumber\")","contactTel":"t.exposeString(\"contactTel\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","phone":"t.exposeString(\"phone\")","verificationNumber":"t.exposeString(\"verificationNumber\")","expiredAt":"t.exposeDateTime(\"expiredAt\")","createdAt":"t.exposeDateTime(\"createdAt\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeString(\"id\")","description":"t.exposeString(\"description\")","content":"t.exposeString(\"content\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeInt(\"id\")","imageInternal":"t.exposeString(\"imageInternal\")","isActive":"t.exposeBoolean(\"isActive\")","createdAt":"t.exposeDateTime(\"createdAt\")"}),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({"id":"t.exposeString(\"id\")","phone":"t.exposeString(\"phone\")","joinedAt":"t.exposeDateTime(\"joinedAt\")","agreeMarketing":"t.exposeBoolean(\"agreeMarketing\")"}),
});
