# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Admin](#admin)
    * [Chat](#chat)
    * [City](#city)
    * [CitySigungu](#citysigungu)
    * [Company](#company)
    * [CompanyCityMap](#companycitymap)
    * [CompanyInfo](#companyinfo)
    * [Customer](#customer)
    * [CustomerInfo](#customerinfo)
    * [Estimate](#estimate)
    * [Image](#image)
    * [Notice](#notice)
    * [NotificationLog](#notificationlog)
    * [NotificationTemplate](#notificationtemplate)
    * [Quotation](#quotation)
    * [Report](#report)
    * [ReportReview](#reportreview)
    * [Request](#request)
    * [RequestImageType](#requestimagetype)
    * [RequestType](#requesttype)
    * [Review](#review)
    * [SignInType](#signintype)
    * [SiteInformation](#siteinformation)
    * [SiteInformationTitleContentData](#siteinformationtitlecontentdata)
    * [Subscription](#subscription)
  * [Inputs](#inputs)
    * [BlockCustomerListRelationFilter](#blockcustomerlistrelationfilter)
    * [BlockCustomerOrderByRelationAggregateInput](#blockcustomerorderbyrelationaggregateinput)
    * [BlockCustomerWhereInput](#blockcustomerwhereinput)
    * [BlockListRelationFilter](#blocklistrelationfilter)
    * [BlockOrderByRelationAggregateInput](#blockorderbyrelationaggregateinput)
    * [BlockWhereInput](#blockwhereinput)
    * [BoolFilter](#boolfilter)
    * [BoolNullableFilter](#boolnullablefilter)
    * [ChatListRelationFilter](#chatlistrelationfilter)
    * [ChatOrderByRelationAggregateInput](#chatorderbyrelationaggregateinput)
    * [ChatWhereInput](#chatwhereinput)
    * [CityOrderByWithRelationInput](#cityorderbywithrelationinput)
    * [CitySigunguListRelationFilter](#citysigungulistrelationfilter)
    * [CitySigunguOrderByRelationAggregateInput](#citysigunguorderbyrelationaggregateinput)
    * [CitySigunguOrderByWithRelationInput](#citysigunguorderbywithrelationinput)
    * [CitySigunguWhereInput](#citysigunguwhereinput)
    * [CitySigunguWhereUniqueInput](#citysigunguwhereuniqueinput)
    * [CityWhereInput](#citywhereinput)
    * [CityWhereUniqueInput](#citywhereuniqueinput)
    * [CompanyCityMapListRelationFilter](#companycitymaplistrelationfilter)
    * [CompanyCityMapOrderByRelationAggregateInput](#companycitymaporderbyrelationaggregateinput)
    * [CompanyCityMapWhereInput](#companycitymapwhereinput)
    * [CompanyInfoOrderByWithRelationInput](#companyinfoorderbywithrelationinput)
    * [CompanyInfoWhereInput](#companyinfowhereinput)
    * [CompanyOrderByWithRelationInput](#companyorderbywithrelationinput)
    * [CompanyRequestTypeMapListRelationFilter](#companyrequesttypemaplistrelationfilter)
    * [CompanyRequestTypeMapOrderByRelationAggregateInput](#companyrequesttypemaporderbyrelationaggregateinput)
    * [CompanyRequestTypeMapWhereInput](#companyrequesttypemapwhereinput)
    * [CompanyUQ_company_1CompoundUniqueInput](#companyuq_company_1compounduniqueinput)
    * [CompanyWhereInput](#companywhereinput)
    * [CompanyWhereUniqueInput](#companywhereuniqueinput)
    * [CustomerInfoOrderByWithRelationInput](#customerinfoorderbywithrelationinput)
    * [CustomerInfoWhereInput](#customerinfowhereinput)
    * [CustomerOrderByWithRelationInput](#customerorderbywithrelationinput)
    * [CustomerUQ_customer_1CompoundUniqueInput](#customeruq_customer_1compounduniqueinput)
    * [CustomerWhereInput](#customerwhereinput)
    * [CustomerWhereUniqueInput](#customerwhereuniqueinput)
    * [DateTimeFilter](#datetimefilter)
    * [DateTimeNullableFilter](#datetimenullablefilter)
    * [EnumBlockDirectionFilter](#enumblockdirectionfilter)
    * [EnumChatTypeFilter](#enumchattypefilter)
    * [EnumCompanyLoginTypeFilter](#enumcompanylogintypefilter)
    * [EnumCompanyStateFilter](#enumcompanystatefilter)
    * [EnumCustomerLoginTypeFilter](#enumcustomerlogintypefilter)
    * [EnumCustomerStateFilter](#enumcustomerstatefilter)
    * [EnumEstimateCancelReasonNullableFilter](#enumestimatecancelreasonnullablefilter)
    * [EnumEstimateStateFilter](#enumestimatestatefilter)
    * [EnumNoticeTargetFilter](#enumnoticetargetfilter)
    * [EnumNoticeTypeFilter](#enumnoticetypefilter)
    * [EnumNotificationLogTypeFilter](#enumnotificationlogtypefilter)
    * [EnumReportReportFromFilter](#enumreportreportfromfilter)
    * [EnumRequestStateFilter](#enumrequeststatefilter)
    * [EnumRequestTypeTypeFilter](#enumrequesttypetypefilter)
    * [EnumSiteInformationTypeFilter](#enumsiteinformationtypefilter)
    * [EstimateListRelationFilter](#estimatelistrelationfilter)
    * [EstimateOrderByRelationAggregateInput](#estimateorderbyrelationaggregateinput)
    * [EstimateOrderByWithRelationInput](#estimateorderbywithrelationinput)
    * [EstimateUQ_estimate_1CompoundUniqueInput](#estimateuq_estimate_1compounduniqueinput)
    * [EstimateWhereInput](#estimatewhereinput)
    * [EstimateWhereUniqueInput](#estimatewhereuniqueinput)
    * [FileUpdateInput](#fileupdateinput)
    * [IntFilter](#intfilter)
    * [IntNullableFilter](#intnullablefilter)
    * [NestedBoolFilter](#nestedboolfilter)
    * [NestedBoolNullableFilter](#nestedboolnullablefilter)
    * [NestedDateTimeFilter](#nesteddatetimefilter)
    * [NestedDateTimeNullableFilter](#nesteddatetimenullablefilter)
    * [NestedEnumBlockDirectionFilter](#nestedenumblockdirectionfilter)
    * [NestedEnumChatTypeFilter](#nestedenumchattypefilter)
    * [NestedEnumCompanyLoginTypeFilter](#nestedenumcompanylogintypefilter)
    * [NestedEnumCompanyStateFilter](#nestedenumcompanystatefilter)
    * [NestedEnumCustomerLoginTypeFilter](#nestedenumcustomerlogintypefilter)
    * [NestedEnumCustomerStateFilter](#nestedenumcustomerstatefilter)
    * [NestedEnumEstimateCancelReasonNullableFilter](#nestedenumestimatecancelreasonnullablefilter)
    * [NestedEnumEstimateStateFilter](#nestedenumestimatestatefilter)
    * [NestedEnumNoticeTargetFilter](#nestedenumnoticetargetfilter)
    * [NestedEnumNoticeTypeFilter](#nestedenumnoticetypefilter)
    * [NestedEnumNotificationLogTypeFilter](#nestedenumnotificationlogtypefilter)
    * [NestedEnumReportReportFromFilter](#nestedenumreportreportfromfilter)
    * [NestedEnumRequestStateFilter](#nestedenumrequeststatefilter)
    * [NestedEnumRequestTypeTypeFilter](#nestedenumrequesttypetypefilter)
    * [NestedEnumSiteInformationTypeFilter](#nestedenumsiteinformationtypefilter)
    * [NestedIntFilter](#nestedintfilter)
    * [NestedIntNullableFilter](#nestedintnullablefilter)
    * [NestedStringFilter](#nestedstringfilter)
    * [NestedStringNullableFilter](#nestedstringnullablefilter)
    * [NoticeOrderByWithRelationInput](#noticeorderbywithrelationinput)
    * [NoticeWhereInput](#noticewhereinput)
    * [NoticeWhereUniqueInput](#noticewhereuniqueinput)
    * [NotificationLogListRelationFilter](#notificationloglistrelationfilter)
    * [NotificationLogOrderByRelationAggregateInput](#notificationlogorderbyrelationaggregateinput)
    * [NotificationLogOrderByWithRelationInput](#notificationlogorderbywithrelationinput)
    * [NotificationLogWhereInput](#notificationlogwhereinput)
    * [NotificationLogWhereUniqueInput](#notificationlogwhereuniqueinput)
    * [NotificationTemplateOrderByWithRelationInput](#notificationtemplateorderbywithrelationinput)
    * [NotificationTemplateWhereInput](#notificationtemplatewhereinput)
    * [NotificationTemplateWhereUniqueInput](#notificationtemplatewhereuniqueinput)
    * [QuotationOrderByWithRelationInput](#quotationorderbywithrelationinput)
    * [QuotationWhereInput](#quotationwhereinput)
    * [ReportIdProcessedAtCompoundUniqueInput](#reportidprocessedatcompounduniqueinput)
    * [ReportListRelationFilter](#reportlistrelationfilter)
    * [ReportOrderByRelationAggregateInput](#reportorderbyrelationaggregateinput)
    * [ReportOrderByWithRelationInput](#reportorderbywithrelationinput)
    * [ReportReviewListRelationFilter](#reportreviewlistrelationfilter)
    * [ReportReviewOrderByRelationAggregateInput](#reportrevieworderbyrelationaggregateinput)
    * [ReportReviewOrderByWithRelationInput](#reportrevieworderbywithrelationinput)
    * [ReportReviewWhereInput](#reportreviewwhereinput)
    * [ReportReviewWhereUniqueInput](#reportreviewwhereuniqueinput)
    * [ReportWhereInput](#reportwhereinput)
    * [ReportWhereUniqueInput](#reportwhereuniqueinput)
    * [RequestFileUpdateInput](#requestfileupdateinput)
    * [RequestImageInput](#requestimageinput)
    * [RequestListRelationFilter](#requestlistrelationfilter)
    * [RequestOrderByRelationAggregateInput](#requestorderbyrelationaggregateinput)
    * [RequestOrderByWithRelationInput](#requestorderbywithrelationinput)
    * [RequestReadListRelationFilter](#requestreadlistrelationfilter)
    * [RequestReadOrderByRelationAggregateInput](#requestreadorderbyrelationaggregateinput)
    * [RequestReadWhereInput](#requestreadwhereinput)
    * [RequestTypeMapListRelationFilter](#requesttypemaplistrelationfilter)
    * [RequestTypeMapOrderByRelationAggregateInput](#requesttypemaporderbyrelationaggregateinput)
    * [RequestTypeMapWhereInput](#requesttypemapwhereinput)
    * [RequestTypeOrderByWithRelationInput](#requesttypeorderbywithrelationinput)
    * [RequestTypeWhereInput](#requesttypewhereinput)
    * [RequestTypeWhereUniqueInput](#requesttypewhereuniqueinput)
    * [RequestWhereInput](#requestwhereinput)
    * [RequestWhereUniqueInput](#requestwhereuniqueinput)
    * [ReviewListRelationFilter](#reviewlistrelationfilter)
    * [ReviewOrderByRelationAggregateInput](#revieworderbyrelationaggregateinput)
    * [ReviewOrderByWithRelationInput](#revieworderbywithrelationinput)
    * [ReviewWhereInput](#reviewwhereinput)
    * [ReviewWhereUniqueInput](#reviewwhereuniqueinput)
    * [SignInAdminByEveryoneArgInput](#signinadminbyeveryonearginput)
    * [SiteInformationOrderByWithRelationInput](#siteinformationorderbywithrelationinput)
    * [SiteInformationTitleContentDataInput](#siteinformationtitlecontentdatainput)
    * [SiteInformationWhereInput](#siteinformationwhereinput)
    * [SiteInformationWhereUniqueInput](#siteinformationwhereuniqueinput)
    * [StringFilter](#stringfilter)
    * [StringNullableFilter](#stringnullablefilter)
    * [UserTokenListRelationFilter](#usertokenlistrelationfilter)
    * [UserTokenOrderByRelationAggregateInput](#usertokenorderbyrelationaggregateinput)
    * [UserTokenWhereInput](#usertokenwhereinput)
  * [Enums](#enums)
    * [AdminState](#adminstate)
    * [BlockDirection](#blockdirection)
    * [ChatType](#chattype)
    * [CompanyLoginType](#companylogintype)
    * [CompanyState](#companystate)
    * [CustomerLoginType](#customerlogintype)
    * [CustomerState](#customerstate)
    * [EstimateCancelReason](#estimatecancelreason)
    * [EstimateState](#estimatestate)
    * [LoginType](#logintype)
    * [ModifyTypeEnum](#modifytypeenum)
    * [NoticeTarget](#noticetarget)
    * [NoticeType](#noticetype)
    * [NotificationLogType](#notificationlogtype)
    * [ReportReportFrom](#reportreportfrom)
    * [RequestState](#requeststate)
    * [RequestTypeType](#requesttypetype)
    * [SendChatType](#sendchattype)
    * [SiteInformationType](#siteinformationtype)
    * [SortOrder](#sortorder)
    * [UserType](#usertype)
  * [Scalars](#scalars)
    * [BigInt](#bigint)
    * [Boolean](#boolean)
    * [Bytes](#bytes)
    * [DateTime](#datetime)
    * [FileUri](#fileuri)
    * [Int](#int)
    * [String](#string)
    * [Upload](#upload)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>whoami</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectSiteInformationsByEveryone</strong></td>
<td valign="top">[<a href="#siteinformation">SiteInformation</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#siteinformationwhereinput">SiteInformationWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#siteinformationorderbywithrelationinput">SiteInformationOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#siteinformationwhereuniqueinput">SiteInformationWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectSiteInformationByEveryone</strong></td>
<td valign="top"><a href="#siteinformation">SiteInformation</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectChatOnEstimateByUser</strong></td>
<td valign="top">[<a href="#chat">Chat</a>!]!</td>
<td>

?먯갔 - 寃ъ쟻???대???梨꾪똿 遺덈윭?ㅻ뒗 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#sortorder">SortOrder</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCitiesByEveryone</strong></td>
<td valign="top">[<a href="#city">City</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#citywhereinput">CityWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#cityorderbywithrelationinput">CityOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#citywhereuniqueinput">CityWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCitySigunguByCustomer</strong></td>
<td valign="top">[<a href="#citysigungu">CitySigungu</a>!]!</td>
<td>

洹??- ?붿껌??'??援?援? 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#citysigunguorderbywithrelationinput">CitySigunguOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#citysigunguwhereuniqueinput">CitySigunguWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectMyInfoByCompany</strong></td>
<td valign="top"><a href="#company">Company</a>!</td>
<td>

?먯갔

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCompanyInfoByCompany</strong></td>
<td valign="top"><a href="#companyinfo">CompanyInfo</a>!</td>
<td>

洹??- 異붽??깅줉?섍린 ?뚮??????쇨렇留덉긽 ???낆껜)?꾨줈??泥ロ솕硫?遺遺?荑쇰━

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCompaniesByAdmin</strong></td>
<td valign="top">[<a href="#company">Company</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#companyorderbywithrelationinput">CompanyOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#companywhereuniqueinput">CompanyWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCompanyByAdmin</strong></td>
<td valign="top"><a href="#company">Company</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">companyId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCompaniesCountByAdmin</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectMyInfoByCustomer</strong></td>
<td valign="top"><a href="#customer">Customer</a>!</td>
<td>

?먯갔

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCustomersByAdmin</strong></td>
<td valign="top">[<a href="#customer">Customer</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#customerorderbywithrelationinput">CustomerOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#customerwhereuniqueinput">CustomerWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCustomerByAdmin</strong></td>
<td valign="top"><a href="#customer">Customer</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customerId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCustomersCountByAdmin</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectEstimatesByAdmin</strong></td>
<td valign="top">[<a href="#estimate">Estimate</a>!]!</td>
<td>

洹??- Admin 寃ъ쟻??荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#estimateorderbywithrelationinput">EstimateOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#estimatewhereuniqueinput">EstimateWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectEstimateByAdmin</strong></td>
<td valign="top"><a href="#estimate">Estimate</a>!</td>
<td>

洹??- Admin 寃ъ쟻???④텒 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectEstimatesCountByAdmin</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

洹??- Admin 寃ъ쟻??Count 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectEstimatesByCompany</strong></td>
<td valign="top">[<a href="#estimate">Estimate</a>!]!</td>
<td>

洹??- ?낆껜 / 蹂대궦 寃ъ쟻 荑쇰━ - Chat 遺덈윭?ㅻ뒗 怨녹? true濡?蹂대궡二쇱꽭??

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isOnChat</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">state</td>
<td valign="top"><a href="#estimatestate">EstimateState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectEstimatesByCustomer</strong></td>
<td valign="top">[<a href="#estimate">Estimate</a>!]!</td>
<td>

洹??- 怨좉컼 / 寃ъ쟻 由ъ뒪??荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">state</td>
<td valign="top"><a href="#estimatestate">EstimateState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectEstimateByCompany</strong></td>
<td valign="top"><a href="#estimate">Estimate</a>!</td>
<td>

洹??- ?낆껜/ 蹂대궦 寃ъ쟻 ?곸꽭蹂닿린 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectEstimateByCustomer</strong></td>
<td valign="top"><a href="#estimate">Estimate</a>!</td>
<td>

洹??- 怨좉컼/?곸꽭 諛쏆? 寃ъ쟻 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectQoutationByUser</strong></td>
<td valign="top"><a href="#quotation">Quotation</a>!</td>
<td>

?ы쁽 - 嫄곕옒 ?쒖븞??理쒖쥌 寃ъ쟻?? ?⑥씪 議고쉶

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectEstimateDetailByAdmin</strong></td>
<td valign="top"><a href="#estimate">Estimate</a>!</td>
<td>

?ы쁽 - 愿由ъ옄 寃ъ쟻???⑥씪 議고쉶 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectNoticesByEveryone</strong></td>
<td valign="top">[<a href="#notice">Notice</a>!]!</td>
<td>

?ы쁽 - 怨듭??ы빆 諛?FAQ 議고쉶 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#noticewhereinput">NoticeWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#noticeorderbywithrelationinput">NoticeOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#noticewhereuniqueinput">NoticeWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectNoticeByEveryone</strong></td>
<td valign="top"><a href="#notice">Notice</a>!</td>
<td>

?ы쁽 - 怨듭??ы빆 諛?FAQ ?⑥씪 議고쉶 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectNoticesCountByEveryone</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

?ы쁽 - 怨듭??ы빆 / FAQ 媛쒖닔 議고쉶 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#noticewhereinput">NoticeWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectNotificationTemplatesByAdmin</strong></td>
<td valign="top">[<a href="#notificationtemplate">NotificationTemplate</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#notificationtemplatewhereinput">NotificationTemplateWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#notificationtemplateorderbywithrelationinput">NotificationTemplateOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#notificationtemplatewhereuniqueinput">NotificationTemplateWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectNotificationTemplateByAdmin</strong></td>
<td valign="top"><a href="#notificationtemplate">NotificationTemplate</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectNotificationTemplatesCountByAdmin</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#notificationtemplatewhereinput">NotificationTemplateWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectNotificationLogsByUser</strong></td>
<td valign="top">[<a href="#notificationlog">NotificationLog</a>!]!</td>
<td>

?ы쁽 - ?뚮┝ 議고쉶 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#notificationlogwhereinput">NotificationLogWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#notificationlogorderbywithrelationinput">NotificationLogOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#notificationlogwhereuniqueinput">NotificationLogWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectNotificationLogByUser</strong></td>
<td valign="top"><a href="#notificationlog">NotificationLog</a></td>
<td>

?ы쁽 - ?뚮┝ ?④굔 議고쉶 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectNotificationLogsCountByUser</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#notificationlogwhereinput">NotificationLogWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectReportsByAdmin</strong></td>
<td valign="top">[<a href="#report">Report</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#reportwhereinput">ReportWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#reportorderbywithrelationinput">ReportOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#reportwhereuniqueinput">ReportWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectReportByAdmin</strong></td>
<td valign="top"><a href="#report">Report</a></td>
<td>

?ы쁽- ?좉퀬 ?⑥씪 議고쉶 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectReportsCountByAdmin</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#reportwhereinput">ReportWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectRequestsByAdmin</strong></td>
<td valign="top">[<a href="#request">Request</a>!]!</td>
<td>

洹??- Admin ?붿껌??由ъ뒪??荑쇰┛

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#requestorderbywithrelationinput">RequestOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#requestwhereuniqueinput">RequestWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectRequestByAdmin</strong></td>
<td valign="top"><a href="#request">Request</a>!</td>
<td>

洹??- Admin ?붿껌??荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectRequestsCountByAdmin</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

洹??- Admin ?붿껌??移댁슫??
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectRequestsByCustomer</strong></td>
<td valign="top">[<a href="#request">Request</a>!]!</td>
<td>

洹??- ?닿? ?깅줉???붿껌??荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">state</td>
<td valign="top"><a href="#requeststate">RequestState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectRequestsByCompany</strong></td>
<td valign="top">[<a href="#request">Request</a>!]!</td>
<td>

洹???먯갔 - ?낆껜 ?붿껌??由ъ뒪??荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">state</td>
<td valign="top"><a href="#requeststate">RequestState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectRequestByCompany</strong></td>
<td valign="top"><a href="#request">Request</a>!</td>
<td>

洹??- ?낆껜媛 ?붿껌???대┃??荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectRequestByCustomer</strong></td>
<td valign="top"><a href="#request">Request</a>!</td>
<td>

洹??- 怨좉컼???붿껌???대┃??
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectRequestTypesByEveryone</strong></td>
<td valign="top">[<a href="#requesttype">RequestType</a>!]!</td>
<td>

?먯갔 - ?꾨Ц遺꾩빞(?묒뾽?좏삎) 遺덈윭?ㅻ뒗 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#requesttypewhereinput">RequestTypeWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#requesttypeorderbywithrelationinput">RequestTypeOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#requesttypewhereuniqueinput">RequestTypeWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectReviewsByEveryone</strong></td>
<td valign="top">[<a href="#review">Review</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#reviewwhereinput">ReviewWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#revieworderbywithrelationinput">ReviewOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#reviewwhereuniqueinput">ReviewWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectReviewByEveryone</strong></td>
<td valign="top"><a href="#review">Review</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectReviewsCountByEveryone</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#reviewwhereinput">ReviewWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectCompanyReviewsByUser</strong></td>
<td valign="top">[<a href="#review">Review</a>!]</td>
<td>

?ы쁽 - ?낆껜蹂?由щ럭 議고쉶 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">companyId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectMyReviewsByCustomer</strong></td>
<td valign="top">[<a href="#review">Review</a>!]</td>
<td>

?ы쁽 - 怨좉컼蹂?由щ럭 議고쉶 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkReviewCreatedByUser</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

?ы쁽 - 由щ럭 ?뺤씤 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectReportReviewsByAdmin</strong></td>
<td valign="top">[<a href="#reportreview">ReportReview</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#reportreviewwhereinput">ReportReviewWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#reportrevieworderbywithrelationinput">ReportReviewOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#reportreviewwhereuniqueinput">ReportReviewWhereUniqueInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectReportReviewsCountByAdmin</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#reportreviewwhereinput">ReportReviewWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>renewToken</strong></td>
<td valign="top"><a href="#signintype">SignInType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">accessToken</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">refreshToken</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestPhoneVerificationByEveryone</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phoneNumber</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>verifyPhoneByEveryone</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phoneNumber</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">verificationNumber</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateSiteInformationByAdmin</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">siteInformationId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a></td>
<td>

id媛 HTML_ , URL_ , TEXT_ 濡??쒖옉?섎뒗 寃쎌슦 ?꾩닔
 URL_??寃쎌슦 http(s)濡??쒖옉?섏? ?딆쑝硫??뚯븘??http瑜?遺숈엯?덈떎.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">titleContentData</td>
<td valign="top">[<a href="#siteinformationtitlecontentdatainput">SiteInformationTitleContentDataInput</a>!]</td>
<td>

id媛 TC_ 濡??쒖옉?섎뒗 寃쎌슦 ?꾩닔

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">files</td>
<td valign="top">[<a href="#fileupdateinput">FileUpdateInput</a>!]</td>
<td>

id媛 FILE_ ?뱀? FILES_ 濡??쒖옉?섎뒗 寃쎌슦 ?꾩닔 
  FILE_ ??寃쎌슦?먮뒗 泥?踰덉㎏ ?뚯씪留?諛섏쁺?⑸땲??

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>signInAdminByEveryone</strong></td>
<td valign="top"><a href="#signintype">SignInType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#signinadminbyeveryonearginput">SignInAdminByEveryoneArgInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sendChatByUser</strong></td>
<td valign="top"><a href="#chat">Chat</a>!</td>
<td>

?먯갔 - 梨꾪똿 ?꾩넚 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

?뚯씪 蹂대궪 ?뚮뒗 鍮?臾몄옄?대줈 蹂대궡二쇱꽭??

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sendType</td>
<td valign="top"><a href="#sendchattype">SendChatType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">file</td>
<td valign="top"><a href="#upload">Upload</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exportChatToExcelByAdmin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

?ы쁽 - 梨꾪똿???묒?濡?蹂?섑븯??裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>signInUserByEveryone</strong></td>
<td valign="top"><a href="#signintype">SignInType</a>!</td>
<td>

?먯갔 - ?듯빀 濡쒓렇???뚯썝媛??裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userType</td>
<td valign="top"><a href="#usertype">UserType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">loginType</td>
<td valign="top"><a href="#logintype">LoginType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">loginId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCompanyInfoByCompany</strong></td>
<td valign="top"><a href="#companyinfo">CompanyInfo</a>!</td>
<td>

?ы쁽 - ?낆껜 ?뺣낫 ?섏젙
 cityIds, requesttypeIds瑜?由ъ뒪?몃줈 ?섍린??寃쎌슦 由ъ뒪???덉뿉 ?덈뒗 紐⑸줉?ㅻ쭔 DB ?곸뿉 議댁옱

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileImage</td>
<td valign="top"><a href="#upload">Upload</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">companyName</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">companyCode</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bankAccountHolder</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bankName</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">bankAccountNumber</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tel</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">canTaxBill</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">canDemolitionGrant</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">canDefectRepair</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">portfolioImages</td>
<td valign="top">[<a href="#fileupdateinput">FileUpdateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">telVerificationId</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cityIds</td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestTypeIds</td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>signInTestByEveryone</strong> ?좑툘</td>
<td valign="top"><a href="#signintype">SignInType</a></td>
<td>
<p>?좑툘 <strong>DEPRECATED</strong></p>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateUsersStateByAdmin</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - 愿由ъ옄 ?좎? ?곹깭(state) 蹂寃?裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isCompany</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

?낆껜??寃쎌슦 true, 怨좉컼??寃쎌슦 false

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">activate</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

?쒖꽦?붿떆?ㅻ뒗 寃쎌슦 true, Ban?섎뒗 寃쎌슦 false

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userIds</td>
<td valign="top">[<a href="#int">Int</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateUserInfoByUser</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

?ы쁽 - 怨좉컼 ???뺣낫 ?섏젙 裕ㅽ뀒?댁뀡 (?낆껜 ?뺣낫 ?섏젙 ?꾨떃?덈떎.)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">profileImage</td>
<td valign="top"><a href="#upload">Upload</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phone</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phoneVerificatonId</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>withdrawUserByUser</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

洹??- ?뚯썝?덊눜

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createEstimateByCompany</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

洹??- 寃ъ쟻???앹꽦

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">price10k</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteEstimateByCompany</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

洹??- ?낆껜/寃ъ쟻????젣 荑쇰━ / ?ы쁽 - CANCEL ??FCM ?꾩넚

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteEstimateByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

洹??- 怨좉컼/寃ъ쟻????젣 荑쇰━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDiscussionByCustomer</strong> ?좑툘</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - 嫄곕옒 ?쒖옉 踰꾪듉 ?대┃ ???묐룞

<p>?좑툘 <strong>DEPRECATED</strong></p>
<blockquote>

??젣???덉젙?낅땲???먯갔)

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sendQuotationByCompany</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - 嫄곕옒 ?쒖븞??蹂대궡湲?- ?ㅼ떆 蹂대궪 ?뚮룄 ?숈씪
?대????몄쬆 ???좏슚??寃?촦stimate??state媛 UNDER_DISCUSSION or QUOTATION_REJECTED?몄?
?곷?諛⑹쓽 state媛 ACTIVATE?몄?
block????User??ID媛 ?깅줉?섏뼱 ?덈뒗吏

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">price</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">dueAt</td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phoneVerificationId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rejectQuotationByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - 嫄곕옒 ?쒖븞???ㅼ떆 ?붿껌?섍린

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>confirmQuotationByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - 嫄곕옒?섍린 裕ㅽ뀒?댁뀡
modifiedAt : Qoutation(嫄곕옒 ?쒖븞?????섏젙 ?쇱떆(modifiedAt)?대????몄쬆 ???좏슚??寃?촦stimate??state媛 UNDER_DISCUSSION or QUOTATION_REJECTED?몄?
?곷?諛⑹쓽 state媛 ACTIVATE?몄?
block????User??ID媛 ?깅줉?섏뼱 ?덈뒗吏

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phoneVerificationId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">modifiedAt</td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Qoutation(嫄곕옒 ?쒖븞?????섏젙 ?쇱떆(modifiedAt)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestConstructionDoneByCompany</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - ?낆껜) 怨듭궗 ?꾨즺 ?붿껌

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>confirmConstructionDoneByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - 怨좉컼) 怨듭궗 ?꾨즺 泥섎━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>confirmDepositByAdmin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

?ы쁽 - ?낃툑 ?꾨즺 ?뺤씤 泥섎━
誘몄셿猷?泥섎━??媛쒖닔?????臾몄옄??諛섑솚

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateIds</td>
<td valign="top">[<a href="#int">Int</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelDealByAdmin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateIds</td>
<td valign="top">[<a href="#int">Int</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createNoticeByAdmin</strong></td>
<td valign="top"><a href="#notice">Notice</a>!</td>
<td>

?ы쁽 - 怨듭??ы빆/FAQ ?앹꽦 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#noticetype">NoticeType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">target</td>
<td valign="top"><a href="#noticetarget">NoticeTarget</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateNoticeByAdmin</strong></td>
<td valign="top"><a href="#notice">Notice</a>!</td>
<td>

?ы쁽 - 怨듭??ы빆/FAQ ?섏젙 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">target</td>
<td valign="top"><a href="#noticetarget">NoticeTarget</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteNoticeByAdmin</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

?ы쁽 - 怨듭??ы빆/FAQ ??젣 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#int">Int</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateFCMTokenByUser</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

?붿껌???숈옉???깃났?섎㈃ true, ?ㅻ쪟濡??ㅽ뙣?섎㈃ false

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">fcmToken</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">set</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createNotificationTemplateByAdmin</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateNotificationTemplateByAdmin</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteNotificationTemplateByAdmin</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#int">Int</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sendNotificationLogsByAdmin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

?ы쁽 - ?뚮┝ ?꾩넚 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">companyIds</td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td>

?뚮┝ 蹂대궪 ?낆껜 由ъ뒪??
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customerIds</td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td>

?뚮┝ 蹂대궪 怨좉컼 由ъ뒪??
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>confirmNotificationLogByUser</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - ?뚮┝ ?쎌쓬 泥섎━

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportUserByUser</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

?ы쁽 - ?좉퀬?섍린 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestId</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isReportFromChatRoom</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">images</td>
<td valign="top">[<a href="#upload">Upload</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>confirmReportByAdmin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

?ы쁽 - 愿由ъ옄???좉퀬 ?뺤씤 泥섎━ 裕ㅽ뀒?댁뀡
?꾨즺 泥섎━??媛쒖닔 臾몄옄?대줈 諛섑솚

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#int">Int</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blockUserByUser</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - ?좎? 李⑤떒 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestId</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chatId</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createRequestByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

洹??- 怨좉컼???붿껌???묒꽦?섎뒗 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">citySigunguId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">addressDetail</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">floor</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pyeong</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">hasElevator</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">trashCarAvailable</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestDate</td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">images</td>
<td valign="top">[<a href="#requestimageinput">RequestImageInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestTypeIds</td>
<td valign="top">[<a href="#int">Int</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteRequestByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

洹??- 怨좉컼???붿껌????젣?섎뒗 裕ㅽ뀒?댁뀡. ?붿껌?쒖뿉 ???諛쏆? 寃ъ쟻?쒓? ?놁쓣 寃쎌슦留???젣(ex. ?앹꽦?섏옄留덉옄 ??젣?섎뒗 寃쎌슦)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateRequestByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

?ы쁽 - 怨좉컼 ?붿껌???섏젙 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">citySigunguId</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">addressDetail</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">floor</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pyeong</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">hasElevator</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">trashCarAvailable</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestDate</td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">images</td>
<td valign="top">[<a href="#requestfileupdateinput">RequestFileUpdateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestTypeIds</td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createReviewByCustomer</strong></td>
<td valign="top"><a href="#review">Review</a>!</td>
<td>

?ы쁽 - 由щ럭 ?앹꽦 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">score</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">content</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">images</td>
<td valign="top">[<a href="#upload">Upload</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteReviewsByAdmin</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

?ы쁽 - 由щ럭 ??젣 裕ㅽ뀒?댁뀡

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#int">Int</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportReviewByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">reviewId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">reason</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

李⑤떒 ?댁쑀

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">withBlock</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

?좉퀬? ?숈떆??李⑤떒??寃껋씤吏 ?щ?

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blockCustomerByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customerId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isUnblock</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### Admin

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#adminstate">AdminState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Chat

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#chattype">ChatType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fileInternal</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>file</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isMyMessage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

"NOTICE" ??낆쓽 寃쎌슦 null, ??硫붿떆吏:true, ?곷?諛?硫붿떆吏 : false

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimate">Estimate</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### City

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sidoName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CitySigungu

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sidoName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sigunguName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#city">City</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Company

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginType</strong></td>
<td valign="top"><a href="#companylogintype">CompanyLoginType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#companystate">CompanyState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>joinedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyInfo</strong></td>
<td valign="top"><a href="#companyinfo">CompanyInfo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cities</strong></td>
<td valign="top">[<a href="#city">City</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestTypes</strong></td>
<td valign="top">[<a href="#requesttype">RequestType</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimates</strong></td>
<td valign="top">[<a href="#estimate">Estimate</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#estimateorderbywithrelationinput">EstimateOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#estimatewhereuniqueinput">EstimateWhereUniqueInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyCityMap

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#city">City</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#company">Company</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CompanyInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileImageInternal</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileImage</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>portfolioImageInternal</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>portfolioImages</strong></td>
<td valign="top">[<a href="#fileuri">FileUri</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tel</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bankAccountHolder</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bankName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bankAccountNumber</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isNeedProfile</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canTaxBill</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canDemolitionGrant</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canDefectRepair</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>introduction</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dealDoneCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviewsCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>averageReviewScore</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimatesCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviews</strong></td>
<td valign="top">[<a href="#review">Review</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#sortorder">SortOrder</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Customer

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginType</strong></td>
<td valign="top"><a href="#customerlogintype">CustomerLoginType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#customerstate">CustomerState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>joinedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerInfo</strong></td>
<td valign="top"><a href="#customerinfo">CustomerInfo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top">[<a href="#request">Request</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top">[<a href="#requestorderbywithrelationinput">RequestOrderByWithRelationInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#requestwhereuniqueinput">RequestWhereUniqueInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileImageInternal</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileImage</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tel</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>averageReviewScore</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

?ы쁽 - ?섏슂??由щ럭 ?됱젏

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestsCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### Estimate

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price10k</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#estimatestate">EstimateState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modifiedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyLastReadId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerLastReadId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isCompanyOnChat</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isCustomerOnChat</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelReason</strong></td>
<td valign="top"><a href="#estimatecancelreason">EstimateCancelReason</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#company">Company</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top"><a href="#request">Request</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasReadByCustomer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

洹??- 怨좉컼??寃ъ쟻?쒕? ?쎌뿀?붿? ?щ?, ?낆껜??臾댁“嫄?true?낅땲??

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canceledAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>unreadChatCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastChat</strong></td>
<td valign="top"><a href="#chat">Chat</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quotation</strong></td>
<td valign="top"><a href="#quotation">Quotation</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userTel</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

?ы쁽 - ?꾪솕踰덊샇 遺덈윭?ㅺ린
DENIED : ?꾪솕 ?곌껐? 嫄곕옒媛 ?뺤젙????媛?ν빀?덈떎.
NOT_FOUND : 怨좉컼, ?낆껜媛 ?녾굅???꾪솕踰덊샇瑜?李얠쓣 ???녿뒗 寃쎌슦
BLOCKED : ??以??쒕챸????履쎌쓣 李⑤떒??寃쎌슦
null : try-catch濡??명븳 ?먮윭 諛쒖깮
洹??댁쇅??寃쎌슦 ?뺤긽?곸쑝濡??꾪솕踰덊샇 諛섑솚

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isWriteReview</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

洹??- ??寃ъ쟻?????由щ럭媛 ?묒꽦???섏뿀?붿?, ?덉쑝硫?由щ럭 ID return, 怨좉컼??寃쎌슦 ?먯떊???쇰뒗吏 ?덉띁?붿? ?덉띁?쇰㈃ null

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>constructionDoneAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
</tbody>
</table>

### Image

original ?쒖쇅?섍퀬???놁쑝硫??몃꽕??留뚮뱶??援ъ“?대?濡??꾩슂 ?쒖뿉留??꾨뱶???ы븿?댁＜?몄슂.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>original</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a>!</td>
<td>

?먮낯 ?대?吏

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>small</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a>!</td>
<td>

?먮낯?대?吏 ?ш린 湲곗? - small : 1/6濡??몃꽕???앹꽦?⑸땲??

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>medium</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a>!</td>
<td>

?먮낯?대?吏 ?ш린 湲곗? - medium : 1/4濡??몃꽕???앹꽦?⑸땲??

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>large</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a>!</td>
<td>

?먮낯?대?吏 ?ш린 湲곗? - large : 1/2濡??몃꽕???앹꽦?⑸땲??

</td>
</tr>
</tbody>
</table>

### Notice

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#noticetype">NoticeType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#noticetarget">NoticeTarget</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

怨듭??ы빆??寃쎌슦 file濡?議고쉶, FAQ??寃쎌슦 content 洹몃?濡?異쒕젰

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>file</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a></td>
<td>

怨듭??ы빆??寃쎌슦?먮쭔 html?뚯씪濡?媛?멸컧

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modifiedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### NotificationLog

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#notificationlogtype">NotificationLogType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isRead</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### NotificationTemplate

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Quotation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price10k</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dueAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modifiedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimate">Estimate</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Report

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestId</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isReportFromChatRoom</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportFrom</strong></td>
<td valign="top"><a href="#reportreportfrom">ReportReportFrom</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#fileuri">FileUri</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isProcessed</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>processedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companyinfo">CompanyInfo</a></td>
<td>

?ы쁽 - ?낆껜 ?뺣낫

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerinfo">CustomerInfo</a></td>
<td>

?ы쁽 - 怨좉컼 ?뺣낫

</td>
</tr>
</tbody>
</table>

### ReportReview

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviewId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reason</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isProcessed</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customer">Customer</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>review</strong></td>
<td valign="top"><a href="#review">Review</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Request

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>citySigunguId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressDetail</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>floor</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pyeong</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasElevator</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trashCarAvailable</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>imageData</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#requeststate">RequestState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>citySigungu</strong></td>
<td valign="top"><a href="#citysigungu">CitySigungu</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customer">Customer</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#requestimagetype">RequestImageType</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestTypeList</strong></td>
<td valign="top">[<a href="#requesttype">RequestType</a>!]!</td>
<td>

洹??- ?붿껌??requestType ?뺣낫

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isRead</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

洹??- ?낆껜媛 ?붿껌?쒕? ?쎌뿀?붿? ?щ?, 怨좉컼? 臾댁“嫄?true?낅땲??

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>receiveEstimateCounts</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

洹??- 諛쏆? 寃ъ쟻??移댁슫??
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>checkEstimateByCompany</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

洹??- ?대떦 ?붿껌?쒖뿉 ?낆껜媛 寃ъ쟻?쒕? 蹂대깉?붿? 泥댄겕, 怨좉컼? 臾댁“嫄?true

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sendEstimatePriceByCompany</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

洹??- 蹂대궦 寃ъ쟻?? 寃ъ쟻媛 荑쇰━

</td>
</tr>
</tbody>
</table>

### RequestImageType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

?대떦 ?ъ쭊???쇰꺼(`'?꾩껜, 諛붾떏, 泥쒖옣 ??`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RequestType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Review

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#fileuri">FileUri</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimate">Estimate</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customer">Customer</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SignInType

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>accessToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>refreshToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SiteInformation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

?쒖옉媛?id??startsWith() ?곸슜?쇰줈 ?먮퀎 媛?ν븳) 湲곗?

 - `TC_` : ?쒕ぉ-?댁슜 ?뺥깭???먮즺 (titleContentInfo ?꾨뱶 李몄“)

 - `HTML_` : HTML ?뺥깭???뚯씪 (file ?꾨뱶 李몄“)

 - `FILE_` : 湲고? ?뚯씪 1媛?(file ?꾨뱶 李몄“)

 - `FILES_` : 湲고? ?뚯씪 0~n媛?(files ?꾨뱶 李몄“)

 - `URL_` : ?몃? URL (留곹겕 ?ㅼ젙 ????寃쎌슦 null)(url ?꾨뱶 李몄“)

 - `TEXT_` : ?⑥닚 ?띿뒪??(content ?꾨뱶 李몄“)

 - `INTERNAL_` : DB ?대? ?명똿??媛?(李몄“遺덇?)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#siteinformationtype">SiteInformationType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

?대떦 ?꾨뱶???ㅻ챸

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>titleContentInfo</strong></td>
<td valign="top">[<a href="#siteinformationtitlecontentdata">SiteInformationTitleContentData</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>file</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>files</strong></td>
<td valign="top">[<a href="#fileuri">FileUri</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL_ ??寃쎌슦, 留곹겕 ?ㅼ젙?????섏뼱 ?덉쑝硫?null濡?由ы꽩?⑸땲??

</td>
</tr>
</tbody>
</table>

### SiteInformationTitleContentData

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Subscription

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>subscribeChatByUser</strong></td>
<td valign="top"><a href="#chat">Chat</a>!</td>
<td>

?먯갔 - ?⑥씪 寃ъ쟻??梨꾪똿諛⑹쓽 梨꾪똿 Subscription

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">authorizationToken</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subscribeEstimatesByUser</strong></td>
<td valign="top"><a href="#estimate">Estimate</a>!</td>
<td>

?먯갔 - 寃ъ쟻??紐⑸줉 ?낅뜲?댄듃 Subscription

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">estimateId</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

?섎굹留??꾪꽣留곹븯怨좎떢?????대떦 arg ?명똿

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">authorizationToken</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### BlockCustomerListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#blockcustomerwhereinput">BlockCustomerWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#blockcustomerwhereinput">BlockCustomerWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#blockcustomerwhereinput">BlockCustomerWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### BlockCustomerOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### BlockCustomerWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#blockcustomerwhereinput">BlockCustomerWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#blockcustomerwhereinput">BlockCustomerWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#blockcustomerwhereinput">BlockCustomerWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fromCustomerId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>toCustomerId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fromCustomer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>toCustomer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### BlockListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#blockwhereinput">BlockWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#blockwhereinput">BlockWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#blockwhereinput">BlockWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### BlockOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### BlockWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#blockwhereinput">BlockWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#blockwhereinput">BlockWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#blockwhereinput">BlockWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#enumblockdirectionfilter">EnumBlockDirectionFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### BoolFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedboolfilter">NestedBoolFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### BoolNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedboolnullablefilter">NestedBoolNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### ChatListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#chatwhereinput">ChatWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#chatwhereinput">ChatWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#chatwhereinput">ChatWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ChatOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### ChatWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#chatwhereinput">ChatWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#chatwhereinput">ChatWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#chatwhereinput">ChatWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#enumchattypefilter">EnumChatTypeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fileInternal</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CityOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sidoName</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>citySigungu</strong></td>
<td valign="top"><a href="#citysigunguorderbyrelationaggregateinput">CitySigunguOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyCityMap</strong></td>
<td valign="top"><a href="#companycitymaporderbyrelationaggregateinput">CompanyCityMapOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CitySigunguListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#citysigunguwhereinput">CitySigunguWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#citysigunguwhereinput">CitySigunguWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#citysigunguwhereinput">CitySigunguWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CitySigunguOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### CitySigunguOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sidoName</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sigunguName</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#cityorderbywithrelationinput">CityOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requests</strong></td>
<td valign="top"><a href="#requestorderbyrelationaggregateinput">RequestOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CitySigunguWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#citysigunguwhereinput">CitySigunguWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#citysigunguwhereinput">CitySigunguWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#citysigunguwhereinput">CitySigunguWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sidoName</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sigunguName</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#citywhereinput">CityWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requests</strong></td>
<td valign="top"><a href="#requestlistrelationfilter">RequestListRelationFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### CitySigunguWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### CityWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#citywhereinput">CityWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#citywhereinput">CityWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#citywhereinput">CityWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sidoName</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>citySigungu</strong></td>
<td valign="top"><a href="#citysigungulistrelationfilter">CitySigunguListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyCityMap</strong></td>
<td valign="top"><a href="#companycitymaplistrelationfilter">CompanyCityMapListRelationFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### CityWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyCityMapListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#companycitymapwhereinput">CompanyCityMapWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#companycitymapwhereinput">CompanyCityMapWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#companycitymapwhereinput">CompanyCityMapWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyCityMapOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyCityMapWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#companycitymapwhereinput">CompanyCityMapWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#companycitymapwhereinput">CompanyCityMapWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#companycitymapwhereinput">CompanyCityMapWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cityId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>city</strong></td>
<td valign="top"><a href="#citywhereinput">CityWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyInfoOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileImageInternal</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyName</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyCode</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bankAccountHolder</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bankName</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bankAccountNumber</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tel</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isNeedProfile</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canTaxBill</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canDemolitionGrant</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canDefectRepair</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>portfolioImageInternal</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>introduction</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companyorderbywithrelationinput">CompanyOrderByWithRelationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyInfoWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#companyinfowhereinput">CompanyInfoWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#companyinfowhereinput">CompanyInfoWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#companyinfowhereinput">CompanyInfoWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileImageInternal</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyName</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyCode</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bankAccountHolder</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bankName</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bankAccountNumber</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tel</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isNeedProfile</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canTaxBill</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canDemolitionGrant</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canDefectRepair</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>portfolioImageInternal</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>introduction</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginType</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>joinedAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block</strong></td>
<td valign="top"><a href="#blockorderbyrelationaggregateinput">BlockOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyCityMap</strong></td>
<td valign="top"><a href="#companycitymaporderbyrelationaggregateinput">CompanyCityMapOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyInfo</strong></td>
<td valign="top"><a href="#companyinfoorderbywithrelationinput">CompanyInfoOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyRequestTypeMap</strong></td>
<td valign="top"><a href="#companyrequesttypemaporderbyrelationaggregateinput">CompanyRequestTypeMapOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimates</strong></td>
<td valign="top"><a href="#estimateorderbyrelationaggregateinput">EstimateOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notificationLogs</strong></td>
<td valign="top"><a href="#notificationlogorderbyrelationaggregateinput">NotificationLogOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reports</strong></td>
<td valign="top"><a href="#reportorderbyrelationaggregateinput">ReportOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestReads</strong></td>
<td valign="top"><a href="#requestreadorderbyrelationaggregateinput">RequestReadOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userTokens</strong></td>
<td valign="top"><a href="#usertokenorderbyrelationaggregateinput">UserTokenOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyRequestTypeMapListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#companyrequesttypemapwhereinput">CompanyRequestTypeMapWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#companyrequesttypemapwhereinput">CompanyRequestTypeMapWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#companyrequesttypemapwhereinput">CompanyRequestTypeMapWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyRequestTypeMapOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyRequestTypeMapWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#companyrequesttypemapwhereinput">CompanyRequestTypeMapWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#companyrequesttypemapwhereinput">CompanyRequestTypeMapWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#companyrequesttypemapwhereinput">CompanyRequestTypeMapWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestTypeId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestType</strong></td>
<td valign="top"><a href="#requesttypewhereinput">RequestTypeWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyUQ_company_1CompoundUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>loginType</strong></td>
<td valign="top"><a href="#companylogintype">CompanyLoginType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CompanyWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#companywhereinput">CompanyWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#companywhereinput">CompanyWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#companywhereinput">CompanyWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginType</strong></td>
<td valign="top"><a href="#enumcompanylogintypefilter">EnumCompanyLoginTypeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#enumcompanystatefilter">EnumCompanyStateFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>joinedAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block</strong></td>
<td valign="top"><a href="#blocklistrelationfilter">BlockListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyCityMap</strong></td>
<td valign="top"><a href="#companycitymaplistrelationfilter">CompanyCityMapListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyInfo</strong></td>
<td valign="top"><a href="#companyinfowhereinput">CompanyInfoWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyRequestTypeMap</strong></td>
<td valign="top"><a href="#companyrequesttypemaplistrelationfilter">CompanyRequestTypeMapListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimates</strong></td>
<td valign="top"><a href="#estimatelistrelationfilter">EstimateListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notificationLogs</strong></td>
<td valign="top"><a href="#notificationloglistrelationfilter">NotificationLogListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reports</strong></td>
<td valign="top"><a href="#reportlistrelationfilter">ReportListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestReads</strong></td>
<td valign="top"><a href="#requestreadlistrelationfilter">RequestReadListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userTokens</strong></td>
<td valign="top"><a href="#usertokenlistrelationfilter">UserTokenListRelationFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>UQ_company_1</strong></td>
<td valign="top"><a href="#companyuq_company_1compounduniqueinput">CompanyUQ_company_1CompoundUniqueInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerInfoOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileImageInternal</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tel</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerorderbywithrelationinput">CustomerOrderByWithRelationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerInfoWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#customerinfowhereinput">CustomerInfoWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#customerinfowhereinput">CustomerInfoWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#customerinfowhereinput">CustomerInfoWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>profileImageInternal</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tel</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginType</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>joinedAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blocks</strong></td>
<td valign="top"><a href="#blockorderbyrelationaggregateinput">BlockOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blockCustomers</strong></td>
<td valign="top"><a href="#blockcustomerorderbyrelationaggregateinput">BlockCustomerOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blockedByCustomers</strong></td>
<td valign="top"><a href="#blockcustomerorderbyrelationaggregateinput">BlockCustomerOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerInfo</strong></td>
<td valign="top"><a href="#customerinfoorderbywithrelationinput">CustomerInfoOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notificationLogs</strong></td>
<td valign="top"><a href="#notificationlogorderbyrelationaggregateinput">NotificationLogOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reports</strong></td>
<td valign="top"><a href="#reportorderbyrelationaggregateinput">ReportOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportReviews</strong></td>
<td valign="top"><a href="#reportrevieworderbyrelationaggregateinput">ReportReviewOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top"><a href="#requestorderbyrelationaggregateinput">RequestOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviews</strong></td>
<td valign="top"><a href="#revieworderbyrelationaggregateinput">ReviewOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userTokens</strong></td>
<td valign="top"><a href="#usertokenorderbyrelationaggregateinput">UserTokenOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerUQ_customer_1CompoundUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>loginType</strong></td>
<td valign="top"><a href="#customerlogintype">CustomerLoginType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CustomerWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#customerwhereinput">CustomerWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#customerwhereinput">CustomerWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#customerwhereinput">CustomerWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginType</strong></td>
<td valign="top"><a href="#enumcustomerlogintypefilter">EnumCustomerLoginTypeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#enumcustomerstatefilter">EnumCustomerStateFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>joinedAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blocks</strong></td>
<td valign="top"><a href="#blocklistrelationfilter">BlockListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blockCustomers</strong></td>
<td valign="top"><a href="#blockcustomerlistrelationfilter">BlockCustomerListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blockedByCustomers</strong></td>
<td valign="top"><a href="#blockcustomerlistrelationfilter">BlockCustomerListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerInfo</strong></td>
<td valign="top"><a href="#customerinfowhereinput">CustomerInfoWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notificationLogs</strong></td>
<td valign="top"><a href="#notificationloglistrelationfilter">NotificationLogListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reports</strong></td>
<td valign="top"><a href="#reportlistrelationfilter">ReportListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportReviews</strong></td>
<td valign="top"><a href="#reportreviewlistrelationfilter">ReportReviewListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top"><a href="#requestlistrelationfilter">RequestListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviews</strong></td>
<td valign="top"><a href="#reviewlistrelationfilter">ReviewListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userTokens</strong></td>
<td valign="top"><a href="#usertokenlistrelationfilter">UserTokenListRelationFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>UQ_customer_1</strong></td>
<td valign="top"><a href="#customeruq_customer_1compounduniqueinput">CustomerUQ_customer_1CompoundUniqueInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### DateTimeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#datetime">DateTime</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#datetime">DateTime</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nesteddatetimefilter">NestedDateTimeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### DateTimeNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#datetime">DateTime</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#datetime">DateTime</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nesteddatetimenullablefilter">NestedDateTimeNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumBlockDirectionFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#blockdirection">BlockDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#blockdirection">BlockDirection</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#blockdirection">BlockDirection</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumblockdirectionfilter">NestedEnumBlockDirectionFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumChatTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#chattype">ChatType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#chattype">ChatType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#chattype">ChatType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumchattypefilter">NestedEnumChatTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumCompanyLoginTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#companylogintype">CompanyLoginType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#companylogintype">CompanyLoginType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#companylogintype">CompanyLoginType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumcompanylogintypefilter">NestedEnumCompanyLoginTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumCompanyStateFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#companystate">CompanyState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#companystate">CompanyState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#companystate">CompanyState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumcompanystatefilter">NestedEnumCompanyStateFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumCustomerLoginTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#customerlogintype">CustomerLoginType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#customerlogintype">CustomerLoginType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#customerlogintype">CustomerLoginType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumcustomerlogintypefilter">NestedEnumCustomerLoginTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumCustomerStateFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#customerstate">CustomerState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#customerstate">CustomerState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#customerstate">CustomerState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumcustomerstatefilter">NestedEnumCustomerStateFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumEstimateCancelReasonNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#estimatecancelreason">EstimateCancelReason</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#estimatecancelreason">EstimateCancelReason</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#estimatecancelreason">EstimateCancelReason</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumestimatecancelreasonnullablefilter">NestedEnumEstimateCancelReasonNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumEstimateStateFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#estimatestate">EstimateState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#estimatestate">EstimateState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#estimatestate">EstimateState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumestimatestatefilter">NestedEnumEstimateStateFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumNoticeTargetFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#noticetarget">NoticeTarget</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#noticetarget">NoticeTarget</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#noticetarget">NoticeTarget</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumnoticetargetfilter">NestedEnumNoticeTargetFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumNoticeTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#noticetype">NoticeType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#noticetype">NoticeType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#noticetype">NoticeType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumnoticetypefilter">NestedEnumNoticeTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumNotificationLogTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#notificationlogtype">NotificationLogType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#notificationlogtype">NotificationLogType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#notificationlogtype">NotificationLogType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumnotificationlogtypefilter">NestedEnumNotificationLogTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumReportReportFromFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#reportreportfrom">ReportReportFrom</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#reportreportfrom">ReportReportFrom</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#reportreportfrom">ReportReportFrom</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumreportreportfromfilter">NestedEnumReportReportFromFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumRequestStateFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#requeststate">RequestState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#requeststate">RequestState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#requeststate">RequestState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumrequeststatefilter">NestedEnumRequestStateFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumRequestTypeTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#requesttypetype">RequestTypeType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#requesttypetype">RequestTypeType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#requesttypetype">RequestTypeType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumrequesttypetypefilter">NestedEnumRequestTypeTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EnumSiteInformationTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#siteinformationtype">SiteInformationType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#siteinformationtype">SiteInformationType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#siteinformationtype">SiteInformationType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumsiteinformationtypefilter">NestedEnumSiteInformationTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### EstimateListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### EstimateOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### EstimateOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price10k</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visitAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modifiedAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyLastReadId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerLastReadId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isCompanyOnChat</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isCustomerOnChat</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelReason</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canceledAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>decidePaymentAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>constructionDoneAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerTel</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasReadByCustomer</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companyorderbywithrelationinput">CompanyOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top"><a href="#requestorderbywithrelationinput">RequestOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chats</strong></td>
<td valign="top"><a href="#chatorderbyrelationaggregateinput">ChatOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quotation</strong></td>
<td valign="top"><a href="#quotationorderbywithrelationinput">QuotationOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reports</strong></td>
<td valign="top"><a href="#reportorderbyrelationaggregateinput">ReportOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>review</strong></td>
<td valign="top"><a href="#revieworderbywithrelationinput">ReviewOrderByWithRelationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### EstimateUQ_estimate_1CompoundUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>requestId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### EstimateWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#estimatewhereinput">EstimateWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#estimatewhereinput">EstimateWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#estimatewhereinput">EstimateWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price10k</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#enumestimatestatefilter">EnumEstimateStateFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visitAt</strong></td>
<td valign="top"><a href="#datetimenullablefilter">DateTimeNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modifiedAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyLastReadId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerLastReadId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isCompanyOnChat</strong></td>
<td valign="top"><a href="#boolnullablefilter">BoolNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isCustomerOnChat</strong></td>
<td valign="top"><a href="#boolnullablefilter">BoolNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelReason</strong></td>
<td valign="top"><a href="#enumestimatecancelreasonnullablefilter">EnumEstimateCancelReasonNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canceledAt</strong></td>
<td valign="top"><a href="#datetimenullablefilter">DateTimeNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>decidePaymentAt</strong></td>
<td valign="top"><a href="#datetimenullablefilter">DateTimeNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>constructionDoneAt</strong></td>
<td valign="top"><a href="#datetimenullablefilter">DateTimeNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerTel</strong></td>
<td valign="top"><a href="#stringnullablefilter">StringNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasReadByCustomer</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chats</strong></td>
<td valign="top"><a href="#chatlistrelationfilter">ChatListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quotation</strong></td>
<td valign="top"><a href="#quotationwhereinput">QuotationWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reports</strong></td>
<td valign="top"><a href="#reportlistrelationfilter">ReportListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>review</strong></td>
<td valign="top"><a href="#reviewwhereinput">ReviewWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### EstimateWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>UQ_estimate_1</strong></td>
<td valign="top"><a href="#estimateuq_estimate_1compounduniqueinput">EstimateUQ_estimate_1CompoundUniqueInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### FileUpdateInput

newFile ?덈뒗 寃쎌슦 newFile ?곗꽑

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>existingFile</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>newFile</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td></td>
</tr>
</tbody>
</table>

### IntFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedintfilter">NestedIntFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### IntNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedintnullablefilter">NestedIntNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedBoolFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedboolfilter">NestedBoolFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedBoolNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedboolnullablefilter">NestedBoolNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedDateTimeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#datetime">DateTime</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#datetime">DateTime</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nesteddatetimefilter">NestedDateTimeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedDateTimeNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#datetime">DateTime</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#datetime">DateTime</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nesteddatetimenullablefilter">NestedDateTimeNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumBlockDirectionFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#blockdirection">BlockDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#blockdirection">BlockDirection</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#blockdirection">BlockDirection</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumblockdirectionfilter">NestedEnumBlockDirectionFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumChatTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#chattype">ChatType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#chattype">ChatType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#chattype">ChatType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumchattypefilter">NestedEnumChatTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumCompanyLoginTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#companylogintype">CompanyLoginType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#companylogintype">CompanyLoginType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#companylogintype">CompanyLoginType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumcompanylogintypefilter">NestedEnumCompanyLoginTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumCompanyStateFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#companystate">CompanyState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#companystate">CompanyState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#companystate">CompanyState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumcompanystatefilter">NestedEnumCompanyStateFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumCustomerLoginTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#customerlogintype">CustomerLoginType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#customerlogintype">CustomerLoginType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#customerlogintype">CustomerLoginType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumcustomerlogintypefilter">NestedEnumCustomerLoginTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumCustomerStateFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#customerstate">CustomerState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#customerstate">CustomerState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#customerstate">CustomerState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumcustomerstatefilter">NestedEnumCustomerStateFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumEstimateCancelReasonNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#estimatecancelreason">EstimateCancelReason</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#estimatecancelreason">EstimateCancelReason</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#estimatecancelreason">EstimateCancelReason</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumestimatecancelreasonnullablefilter">NestedEnumEstimateCancelReasonNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumEstimateStateFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#estimatestate">EstimateState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#estimatestate">EstimateState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#estimatestate">EstimateState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumestimatestatefilter">NestedEnumEstimateStateFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumNoticeTargetFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#noticetarget">NoticeTarget</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#noticetarget">NoticeTarget</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#noticetarget">NoticeTarget</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumnoticetargetfilter">NestedEnumNoticeTargetFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumNoticeTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#noticetype">NoticeType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#noticetype">NoticeType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#noticetype">NoticeType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumnoticetypefilter">NestedEnumNoticeTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumNotificationLogTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#notificationlogtype">NotificationLogType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#notificationlogtype">NotificationLogType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#notificationlogtype">NotificationLogType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumnotificationlogtypefilter">NestedEnumNotificationLogTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumReportReportFromFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#reportreportfrom">ReportReportFrom</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#reportreportfrom">ReportReportFrom</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#reportreportfrom">ReportReportFrom</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumreportreportfromfilter">NestedEnumReportReportFromFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumRequestStateFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#requeststate">RequestState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#requeststate">RequestState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#requeststate">RequestState</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumrequeststatefilter">NestedEnumRequestStateFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumRequestTypeTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#requesttypetype">RequestTypeType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#requesttypetype">RequestTypeType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#requesttypetype">RequestTypeType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumrequesttypetypefilter">NestedEnumRequestTypeTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedEnumSiteInformationTypeFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#siteinformationtype">SiteInformationType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#siteinformationtype">SiteInformationType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#siteinformationtype">SiteInformationType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedenumsiteinformationtypefilter">NestedEnumSiteInformationTypeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedIntFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedintfilter">NestedIntFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedIntNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedintnullablefilter">NestedIntNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedStringFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contains</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startsWith</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endsWith</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedstringfilter">NestedStringFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NestedStringNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contains</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startsWith</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endsWith</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedstringnullablefilter">NestedStringNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NoticeOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modifiedAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### NoticeWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#noticewhereinput">NoticeWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#noticewhereinput">NoticeWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#noticewhereinput">NoticeWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#enumnoticetypefilter">EnumNoticeTypeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#enumnoticetargetfilter">EnumNoticeTargetFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modifiedAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NoticeWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### NotificationLogListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#notificationlogwhereinput">NotificationLogWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#notificationlogwhereinput">NotificationLogWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#notificationlogwhereinput">NotificationLogWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### NotificationLogOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### NotificationLogOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isRead</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companyorderbywithrelationinput">CompanyOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerorderbywithrelationinput">CustomerOrderByWithRelationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### NotificationLogWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#notificationlogwhereinput">NotificationLogWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#notificationlogwhereinput">NotificationLogWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#notificationlogwhereinput">NotificationLogWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#enumnotificationlogtypefilter">EnumNotificationLogTypeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isRead</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### NotificationLogWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### NotificationTemplateOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### NotificationTemplateWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#notificationtemplatewhereinput">NotificationTemplateWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#notificationtemplatewhereinput">NotificationTemplateWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#notificationtemplatewhereinput">NotificationTemplateWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### NotificationTemplateWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### QuotationOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price10k</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dueAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modifiedAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateFileInternal</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimateorderbywithrelationinput">EstimateOrderByWithRelationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### QuotationWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#quotationwhereinput">QuotationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#quotationwhereinput">QuotationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#quotationwhereinput">QuotationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price10k</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dueAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modifiedAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateFileInternal</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportIdProcessedAtCompoundUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>processedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ReportListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#reportwhereinput">ReportWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#reportwhereinput">ReportWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#reportwhereinput">ReportWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isReportFromChatRoom</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportFrom</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>imageInternal</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isProcessed</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>processedAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companyorderbywithrelationinput">CompanyOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerorderbywithrelationinput">CustomerOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimateorderbywithrelationinput">EstimateOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top"><a href="#requestorderbywithrelationinput">RequestOrderByWithRelationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportReviewListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#reportreviewwhereinput">ReportReviewWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#reportreviewwhereinput">ReportReviewWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#reportreviewwhereinput">ReportReviewWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportReviewOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportReviewOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviewId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reason</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isProcessed</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerorderbywithrelationinput">CustomerOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>review</strong></td>
<td valign="top"><a href="#revieworderbywithrelationinput">ReviewOrderByWithRelationInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportReviewWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#reportreviewwhereinput">ReportReviewWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#reportreviewwhereinput">ReportReviewWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#reportreviewwhereinput">ReportReviewWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviewId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reason</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isProcessed</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>review</strong></td>
<td valign="top"><a href="#reviewwhereinput">ReviewWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportReviewWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#reportwhereinput">ReportWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#reportwhereinput">ReportWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#reportwhereinput">ReportWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestId</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isReportFromChatRoom</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportFrom</strong></td>
<td valign="top"><a href="#enumreportreportfromfilter">EnumReportReportFromFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>imageInternal</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isProcessed</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>processedAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReportWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id_processedAt</strong></td>
<td valign="top"><a href="#reportidprocessedatcompounduniqueinput">ReportIdProcessedAtCompoundUniqueInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestFileUpdateInput

newFile ?덈뒗 寃쎌슦 newFile ?곗꽑

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>existingFile</strong></td>
<td valign="top"><a href="#fileuri">FileUri</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>newFile</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestImageInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RequestListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>imageData</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>citySigunguId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressDetail</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>floor</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pyeong</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasElevator</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trashCarAvailable</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxBillAvailable</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasDemolitionGrant</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestDate</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>citySigungu</strong></td>
<td valign="top"><a href="#citysigunguorderbywithrelationinput">CitySigunguOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerorderbywithrelationinput">CustomerOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimates</strong></td>
<td valign="top"><a href="#estimateorderbyrelationaggregateinput">EstimateOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reports</strong></td>
<td valign="top"><a href="#reportorderbyrelationaggregateinput">ReportOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestRead</strong></td>
<td valign="top"><a href="#requestreadorderbyrelationaggregateinput">RequestReadOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestTypeMap</strong></td>
<td valign="top"><a href="#requesttypemaporderbyrelationaggregateinput">RequestTypeMapOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestReadListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#requestreadwhereinput">RequestReadWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#requestreadwhereinput">RequestReadWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#requestreadwhereinput">RequestReadWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestReadOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestReadWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#requestreadwhereinput">RequestReadWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#requestreadwhereinput">RequestReadWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#requestreadwhereinput">RequestReadWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestTypeMapListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#requesttypemapwhereinput">RequestTypeMapWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#requesttypemapwhereinput">RequestTypeMapWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#requesttypemapwhereinput">RequestTypeMapWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestTypeMapOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestTypeMapWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#requesttypemapwhereinput">RequestTypeMapWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#requesttypemapwhereinput">RequestTypeMapWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#requesttypemapwhereinput">RequestTypeMapWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestTypeId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>request</strong></td>
<td valign="top"><a href="#requestwhereinput">RequestWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestType</strong></td>
<td valign="top"><a href="#requesttypewhereinput">RequestTypeWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestTypeOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyRequestTypeMap</strong></td>
<td valign="top"><a href="#companyrequesttypemaporderbyrelationaggregateinput">CompanyRequestTypeMapOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestTypeMap</strong></td>
<td valign="top"><a href="#requesttypemaporderbyrelationaggregateinput">RequestTypeMapOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestTypeWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#requesttypewhereinput">RequestTypeWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#requesttypewhereinput">RequestTypeWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#requesttypewhereinput">RequestTypeWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#enumrequesttypetypefilter">EnumRequestTypeTypeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyRequestTypeMap</strong></td>
<td valign="top"><a href="#companyrequesttypemaplistrelationfilter">CompanyRequestTypeMapListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestTypeMap</strong></td>
<td valign="top"><a href="#requesttypemaplistrelationfilter">RequestTypeMapListRelationFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestTypeWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#requestwhereinput">RequestWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#requestwhereinput">RequestWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#requestwhereinput">RequestWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>imageData</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>citySigunguId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressDetail</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>floor</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pyeong</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasElevator</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trashCarAvailable</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taxBillAvailable</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasDemolitionGrant</strong></td>
<td valign="top"><a href="#boolfilter">BoolFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestDate</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#enumrequeststatefilter">EnumRequestStateFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>citySigungu</strong></td>
<td valign="top"><a href="#citysigunguwhereinput">CitySigunguWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimates</strong></td>
<td valign="top"><a href="#estimatelistrelationfilter">EstimateListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reports</strong></td>
<td valign="top"><a href="#reportlistrelationfilter">ReportListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestRead</strong></td>
<td valign="top"><a href="#requestreadlistrelationfilter">RequestReadListRelationFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestTypeMap</strong></td>
<td valign="top"><a href="#requesttypemaplistrelationfilter">RequestTypeMapListRelationFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### RequestWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReviewListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#reviewwhereinput">ReviewWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#reviewwhereinput">ReviewWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#reviewwhereinput">ReviewWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReviewOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReviewOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>imagesInternal</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerorderbywithrelationinput">CustomerOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimateorderbywithrelationinput">EstimateOrderByWithRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportReviews</strong></td>
<td valign="top"><a href="#reportrevieworderbyrelationaggregateinput">ReportReviewOrderByRelationAggregateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReviewWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#reviewwhereinput">ReviewWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#reviewwhereinput">ReviewWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#reviewwhereinput">ReviewWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>imagesInternal</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimate</strong></td>
<td valign="top"><a href="#estimatewhereinput">EstimateWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportReviews</strong></td>
<td valign="top"><a href="#reportreviewlistrelationfilter">ReportReviewListRelationFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReviewWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateId</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### SignInAdminByEveryoneArgInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>loginId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SiteInformationOrderByWithRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### SiteInformationTitleContentDataInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SiteInformationWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#siteinformationwhereinput">SiteInformationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#siteinformationwhereinput">SiteInformationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#siteinformationwhereinput">SiteInformationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#enumsiteinformationtypefilter">EnumSiteInformationTypeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### SiteInformationWhereUniqueInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### StringFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contains</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startsWith</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endsWith</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedstringfilter">NestedStringFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### StringNullableFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>in</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notIn</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contains</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startsWith</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endsWith</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#nestedstringnullablefilter">NestedStringNullableFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### UserTokenListRelationFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>every</strong></td>
<td valign="top"><a href="#usertokenwhereinput">UserTokenWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>some</strong></td>
<td valign="top"><a href="#usertokenwhereinput">UserTokenWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>none</strong></td>
<td valign="top"><a href="#usertokenwhereinput">UserTokenWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### UserTokenOrderByRelationAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
</tbody>
</table>

### UserTokenWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#usertokenwhereinput">UserTokenWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#usertokenwhereinput">UserTokenWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top">[<a href="#usertokenwhereinput">UserTokenWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customerId</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>companyId</strong></td>
<td valign="top"><a href="#intnullablefilter">IntNullableFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#companywhereinput">CompanyWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer</strong></td>
<td valign="top"><a href="#customerwhereinput">CustomerWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

## Enums

### AdminState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACTIVE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DELETED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### BlockDirection

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CUSTOMER_BLOCKS_COMPANY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>COMPANY_BLOCKS_CUSTOMER</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ChatType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>TEXT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IMAGE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VIDEO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FILE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOTICE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PROFILE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SUGGEST_DELIVERED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>START_DISCUSSION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SEND_QUOTATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REJECT_QUOTATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUOTATION_CONFIRMED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DEPOSIT_DONE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REQUEST_CONSTRUCTION_DONE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CONSTRUCTION_DONE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyLoginType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>KAKAO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>APPLE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CompanyState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACTIVE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BANNED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DELETED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerLoginType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>KAKAO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>APPLE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CustomerState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACTIVE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BANNED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DELETED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### EstimateCancelReason

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DEAL_WITH_OTHER_COMPANY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DEPOSIT_NOT_CONFIRMED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ADMIN_CANCELED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CUSTOMER_EXITED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>COMPANY_EXITED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### EstimateState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ON_CHAT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SUGGESTED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUOTATION_SENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUOTATION_REJECTED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNDER_CONSTRUCTION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DONE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### LoginType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>KAKAO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>APPLE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ModifyTypeEnum

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CREATE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UPDATE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DELETE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### NoticeTarget

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALL</strong></td>
<td></td>
</tr>
</tbody>
</table>

### NoticeType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NOTICE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FAQ</strong></td>
<td></td>
</tr>
</tbody>
</table>

### NotificationLogType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NOTICE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ESTIMATE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHAT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ReportReportFrom

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CUSTOMER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>COMPANY</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RequestState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>UNDER_CHECK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REGISTERED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IN_PROGRESS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DONE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RequestTypeType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DEMOLISH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RESTORE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### SendChatType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>TEXT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IMAGE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>VIDEO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FILE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### SiteInformationType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>COMPANY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CUSTOMER</strong></td>
<td></td>
</tr>
</tbody>
</table>

### SortOrder

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>asc</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>desc</strong></td>
<td></td>
</tr>
</tbody>
</table>

### UserType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>COMPANY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CUSTOMER</strong></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### BigInt

The `BigInt` scalar type represents non-fractional signed whole numeric values.

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Bytes

The `Byte` scalar type represents byte value as a Buffer

### DateTime

A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.

### FileUri

string怨??묎컳?듬땲??S3???뚯씪 URI ?쒓린???ㅼ뭡??.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### Upload

The `Upload` scalar type represents a file upload.

