# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Image](#image)
    * [SignInType](#signintype)
    * [TestTable](#testtable)
  * [Inputs](#inputs)
    * [FileUpdateInput](#fileupdateinput)
  * [Enums](#enums)
    * [ModifyTypeEnum](#modifytypeenum)
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
<td colspan="2" valign="top"><strong>selectByEveryone</strong></td>
<td valign="top">[<a href="#testtable">TestTable</a>!]!</td>
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
<td colspan="2" valign="top"><strong>testByEveryone</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>

## Objects

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

### TestTable

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
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

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

## Enums

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

