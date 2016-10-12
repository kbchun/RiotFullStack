"use strict";

window.exampleGameData = [{ "champion": "Illaoi", "totalDamageDealtToChampions": 9993, "totalDamageTaken": 14916, "wardPlaced": 5, "wardKilled": 0, "playerRole": 4, "assists": 1, "deaths": 3, "largestMultiKill": 2, "kills": 4, "largestKillingSpree": 3, "win": true, "timePlayed": "22.05", "ipEarned": 226 }, { "champion": "Illaoi", "totalDamageDealtToChampions": 32714, "totalDamageTaken": 39597, "wardPlaced": 9, "wardKilled": 2, "playerRole": 4, "assists": 17, "deaths": 6, "largestMultiKill": 3, "kills": 13, "largestKillingSpree": 4, "win": true, "timePlayed": "45.05", "ipEarned": 272 }, { "champion": "Illaoi", "totalDamageDealtToChampions": 16027, "totalDamageTaken": 26260, "wardPlaced": 9, "wardKilled": 0, "playerRole": 4, "assists": 1, "deaths": 7, "largestMultiKill": 1, "kills": 3, "largestKillingSpree": 0, "win": false, "timePlayed": "29.13", "ipEarned": 114 }, { "champion": "Illaoi", "totalDamageDealtToChampions": 13844, "totalDamageTaken": 16688, "wardPlaced": 5, "wardKilled": 0, "playerRole": 4, "assists": 4, "deaths": 2, "largestMultiKill": 2, "kills": 8, "largestKillingSpree": 4, "win": true, "timePlayed": "24.80", "ipEarned": 302 }, { "champion": "Illaoi", "totalDamageDealtToChampions": 26148, "totalDamageTaken": 30498, "wardPlaced": 6, "wardKilled": 2, "playerRole": 4, "assists": 10, "deaths": 7, "largestMultiKill": 1, "kills": 4, "largestKillingSpree": 2, "win": true, "timePlayed": "33.28", "ipEarned": 94 }, { "champion": "Illaoi", "totalDamageDealtToChampions": 8524, "totalDamageTaken": 14331, "wardPlaced": 5, "wardKilled": 0, "assists": 1, "deaths": 5, "largestMultiKill": 1, "kills": 2, "largestKillingSpree": 0, "win": false, "timePlayed": "20.43", "ipEarned": 51 }, { "champion": "Ashe", "totalDamageDealtToChampions": 8285, "totalDamageTaken": 13034, "wardPlaced": 1, "wardKilled": 1, "playerRole": 1, "assists": 2, "deaths": 7, "largestMultiKill": 1, "kills": 2, "largestKillingSpree": 2, "win": false, "timePlayed": "22.65", "ipEarned": 51 }, { "champion": "Darius", "totalDamageDealtToChampions": 14306, "totalDamageTaken": 29914, "wardPlaced": 4, "wardKilled": 0, "playerRole": 4, "assists": 2, "deaths": 10, "largestMultiKill": 1, "kills": 5, "largestKillingSpree": 4, "win": false, "timePlayed": "28.40", "ipEarned": 55 }, { "champion": "Darius", "totalDamageDealtToChampions": 15770, "totalDamageTaken": 34709, "wardPlaced": 8, "wardKilled": 1, "assists": 6, "deaths": 9, "largestMultiKill": 1, "kills": 4, "largestKillingSpree": 0, "win": true, "timePlayed": "44.88", "ipEarned": 270 }, { "champion": "Illaoi", "totalDamageDealtToChampions": 12008, "totalDamageTaken": 18417, "wardPlaced": 9, "wardKilled": 0, "assists": 0, "deaths": 7, "largestMultiKill": 0, "kills": 0, "largestKillingSpree": 0, "win": false, "timePlayed": "30.78", "ipEarned": 58 }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL2V4YW1wbGVHYW1lRGF0YS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJleGFtcGxlR2FtZURhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLGVBQVAsR0FBeUIsQ0FBQyxFQUFDLFlBQVcsUUFBWixFQUFxQiwrQkFBOEIsSUFBbkQsRUFBd0Qsb0JBQW1CLEtBQTNFLEVBQWlGLGNBQWEsQ0FBOUYsRUFBZ0csY0FBYSxDQUE3RyxFQUErRyxjQUFhLENBQTVILEVBQThILFdBQVUsQ0FBeEksRUFBMEksVUFBUyxDQUFuSixFQUFxSixvQkFBbUIsQ0FBeEssRUFBMEssU0FBUSxDQUFsTCxFQUFvTCx1QkFBc0IsQ0FBMU0sRUFBNE0sT0FBTSxJQUFsTixFQUF1TixjQUFhLE9BQXBPLEVBQTRPLFlBQVcsR0FBdlAsRUFBRCxFQUE2UCxFQUFDLFlBQVcsUUFBWixFQUFxQiwrQkFBOEIsS0FBbkQsRUFBeUQsb0JBQW1CLEtBQTVFLEVBQWtGLGNBQWEsQ0FBL0YsRUFBaUcsY0FBYSxDQUE5RyxFQUFnSCxjQUFhLENBQTdILEVBQStILFdBQVUsRUFBekksRUFBNEksVUFBUyxDQUFySixFQUF1SixvQkFBbUIsQ0FBMUssRUFBNEssU0FBUSxFQUFwTCxFQUF1TCx1QkFBc0IsQ0FBN00sRUFBK00sT0FBTSxJQUFyTixFQUEwTixjQUFhLE9BQXZPLEVBQStPLFlBQVcsR0FBMVAsRUFBN1AsRUFBNGYsRUFBQyxZQUFXLFFBQVosRUFBcUIsK0JBQThCLEtBQW5ELEVBQXlELG9CQUFtQixLQUE1RSxFQUFrRixjQUFhLENBQS9GLEVBQWlHLGNBQWEsQ0FBOUcsRUFBZ0gsY0FBYSxDQUE3SCxFQUErSCxXQUFVLENBQXpJLEVBQTJJLFVBQVMsQ0FBcEosRUFBc0osb0JBQW1CLENBQXpLLEVBQTJLLFNBQVEsQ0FBbkwsRUFBcUwsdUJBQXNCLENBQTNNLEVBQTZNLE9BQU0sS0FBbk4sRUFBeU4sY0FBYSxPQUF0TyxFQUE4TyxZQUFXLEdBQXpQLEVB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ZXNDb250ZW50IjpbIndpbmRvdy5leGFtcGxlR2FtZURhdGEgPSBbe1wiY2hhbXBpb25cIjpcIklsbGFvaVwiLFwidG90YWxEYW1hZ2VEZWFsdFRvQ2hhbXBpb25zXCI6OTk5MyxcInRvdGFsRGFtYWdlVGFrZW5cIjoxNDkxNixcIndhcmRQbGFjZWRcIjo1LFwid2FyZEtpbGxlZFwiOjAsXCJwbGF5ZXJSb2xlXCI6NCxcImFzc2lzdHNcIjoxLFwiZGVhdGhzXCI6MyxcImxhcmdlc3RNdWx0aUtpbGxcIjoyLFwia2lsbHNcIjo0LFwibGFyZ2VzdEtpbGxpbmdTcHJlZVwiOjMsXCJ3aW5cIjp0cnVlLFwidGltZVBsYXllZFwiOlwiMjIuMDVcIixcImlwRWFybmVkXCI6MjI2fSx7XCJjaGFtcGlvblwiOlwiSWxsYW9pXCIsXCJ0b3RhbERhbWFnZURlYWx0VG9DaGFtcGlvbnNcIjozMjcxNCxcInRvdGFsRGFtYWdlVGFrZW5cIjozOTU5NyxcIndhcmRQbGFjZWRcIjo5LFwid2FyZEtpbGxlZFwiOjIsXCJwbGF5ZXJSb2xlXCI6NCxcImFzc2lzdHNcIjoxNyxcImRlYXRoc1wiOjYsXCJsYXJnZXN0TXVsdGlLaWxsXCI6MyxcImtpbGxzXCI6MTMsXCJsYXJnZXN0S2lsbGluZ1NwcmVlXCI6NCxcIndpblwiOnRydWUsXCJ0aW1lUGxheWVkXCI6XCI0NS4wNVwiLFwiaXBFYXJuZWRcIjoyNzJ9LHtcImNoYW1waW9uXCI6XCJJbGxhb2lcIixcInRvdGFsRGFtYWdlRGVhbHRUb0NoYW1waW9uc1wiOjE2MDI3LFwidG90YWxEYW1hZ2VUYWtlblwiOjI2MjYwLFwid2FyZFBsYWNlZFwiOjksXCJ3YXJkS2lsbGVkXCI6MCxcInBsYXllclJvbGVcIjo0LFwiYXNzaXN0c1wiOjEsXCJkZWF0aHNcIjo3LFwibGFyZ2VzdE11bHRpS2lsbFwiOjEsXCJraWxsc1wiOjMsXCJsYXJnZXN0S2lsbGluZ1NwcmVlXCI6MCxcIndpblwiOmZhbHNlLFwidGltZVBsYXllZFwiOlwiMjkuMTNcIixcImlwRWFybmVkXCI6MTE0fSx7XCJjaGFtcGlvblwiOlwiSWxsYW9pXCIsXCJ0b3RhbERhbWFnZURlYWx0VG9DaGFtcGlvbnNcIjoxMzg0NCxcInRvdGFsRGFtYWdlVGFrZW5cIjoxNjY4OCxcIndhcmRQbGFjZWRcIjo1LFwid2FyZEtpbGxlZFwiOjAsXCJwbGF5ZXJSb2xlXCI6NCxcImFzc2lzdHNcIjo0LFwiZGVhdGhzXCI6MixcImxhcmdlc3RNdWx0aUtpbGxcIjoyLFwia2lsbHNcIjo4LFwibGFyZ2VzdEtpbGxpbmdTcHJlZVwiOjQsXCJ3aW5cIjp0cnVlLFwidGltZVBsYXllZFwiOlwiMjQuODBcIixcImlwRWFybmVkXCI6MzAyfSx7XCJjaGFtcGlvblwiOlwiSWxsYW9pXCIsXCJ0b3RhbERhbWFnZURlYWx0VG9DaGFtcGlvbnNcIjoyNjE0OCxcInRvdGFsRGFtYWdlVGFrZW5cIjozMDQ5OCxcIndhcmRQbGFjZWRcIjo2LFwid2FyZEtpbGxlZFwiOjIsXCJwbGF5ZXJSb2xlXCI6NCxcImFzc2lzdHNcIjoxMCxcImRlYXRoc1wiOjcsXCJsYXJnZXN0TXVsdGlLaWxsXCI6MSxcImtpbGxzXCI6NCxcImxhcmdlc3RLaWxsaW5nU3ByZWVcIjoyLFwid2luXCI6dHJ1ZSxcInRpbWVQbGF5ZWRcIjpcIjMzLjI4XCIsXCJpcEVhcm5lZFwiOjk0fSx7XCJjaGFtcGlvblwiOlwiSWxsYW9pXCIsXCJ0b3RhbERhbWFnZURlYWx0VG9DaGFtcGlvbnNcIjo4NTI0LFwidG90YWxEYW1hZ2VUYWtlblwiOjE0MzMxLFwid2FyZFBsYWNlZFwiOjUsXCJ3YXJkS2lsbGVkXCI6MCxcImFzc2lzdHNcIjoxLFwiZGVhdGhzXCI6NSxcImxhcmdlc3RNdWx0aUtpbGxcIjoxLFwia2lsbHNcIjoyLFwibGFyZ2VzdEtpbGxpbmdTcHJlZVwiOjAsXCJ3aW5cIjpmYWxzZSxcInRpbWVQbGF5ZWRcIjpcIjIwLjQzXCIsXCJpcEVhcm5lZFwiOjUxfSx7XCJjaGFtcGlvblwiOlwiQXNoZVwiLFwidG90YWxEYW1hZ2VEZWFsdFRvQ2hhbXBpb25zXCI6ODI4NSxcInRvdGFsRGFtYWdlVGFrZW5cIjoxMzAzNCxcIndhcmRQbGFjZWRcIjoxLFwid2FyZEtpbGxlZFwiOjEsXCJwbGF5ZXJSb2xlXCI6MSxcImFzc2lzdHNcIjoyLFwiZGVhdGhzXCI6NyxcImxhcmdlc3RNdWx0aUtpbGxcIjoxLFwia2lsbHNcIjoyLFwibGFyZ2VzdEtpbGxpbmdTcHJlZVwiOjIsXCJ3aW5cIjpmYWxzZSxcInRpbWVQbGF5ZWRcIjpcIjIyLjY1XCIsXCJpcEVhcm5lZFwiOjUxfSx7XCJjaGFtcGlvblwiOlwiRGFyaXVzXCIsXCJ0b3RhbERhbWFnZURlYWx0VG9DaGFtcGlvbnNcIjoxNDMwNixcInRvdGFsRGFtYWdlVGFrZW5cIjoyOTkxNCxcIndhcmRQbGFjZWRcIjo0LFwid2FyZEtpbGxlZFwiOjAsXCJwbGF5ZXJSb2xlXCI6NCxcImFzc2lzdHNcIjoyLFwiZGVhdGhzXCI6MTAsXCJsYXJnZXN0TXVsdGlLaWxsXCI6MSxcImtpbGxzXCI6NSxcImxhcmdlc3RLaWxsaW5nU3ByZWVcIjo0LFwid2luXCI6ZmFsc2UsXCJ0aW1lUGxheWVkXCI6XCIyOC40MFwiLFwiaXBFYXJuZWRcIjo1NX0se1wiY2hhbXBpb25cIjpcIkRhcml1c1wiLFwidG90YWxEYW1hZ2VEZWFsdFRvQ2hhbXBpb25zXCI6MTU3NzAsXCJ0b3RhbERhbWFnZVRha2VuXCI6MzQ3MDksXCJ3YXJkUGxhY2VkXCI6OCxcIndhcmRLaWxsZWRcIjoxLFwiYXNzaXN0c1wiOjYsXCJkZWF0aHNcIjo5LFwibGFyZ2VzdE11bHRpS2lsbFwiOjEsXCJraWxsc1wiOjQsXCJsYXJnZXN0S2lsbGluZ1NwcmVlXCI6MCxcIndpblwiOnRydWUsXCJ0aW1lUGxheWVkXCI6XCI0NC44OFwiLFwiaXBFYXJuZWRcIjoyNzB9LHtcImNoYW1waW9uXCI6XCJJbGxhb2lcIixcInRvdGFsRGFtYWdlRGVhbHRUb0NoYW1waW9uc1wiOjEyMDA4LFwidG90YWxEYW1hZ2VUYWtlblwiOjE4NDE3LFwid2FyZFBsYWNlZFwiOjksXCJ3YXJkS2lsbGVkXCI6MCxcImFzc2lzdHNcIjowLFwiZGVhdGhzXCI6NyxcImxhcmdlc3RNdWx0aUtpbGxcIjowLFwia2lsbHNcIjowLFwibGFyZ2VzdEtpbGxpbmdTcHJlZVwiOjAsXCJ3aW5cIjpmYWxzZSxcInRpbWVQbGF5ZWRcIjpcIjMwLjc4XCIsXCJpcEVhcm5lZFwiOjU4fV07Il19