/**
    * @name:        ShowCasesController   
    * @date:        12 SEPT 2019
    * @description: This Apex Class is used to return the Case records
**/

public with sharing class ShowCasesController {

    
    /**
      * @name:        getCases   
      * @param(s):    none
      * @return:      List<Case>
      * @description: To return the Case records
    **/
    @AuraEnabled(cacheable=true)
    public static List<Case> getCases(){
        List<Case> caseList = new List<Case>();

        caseList = [SELECT  Id,
                            CaseNumber,
                            Status,
                            Subject,                              
                            CreatedDate,
                            AccountId,
                            Account.Name,
                            Account.BillingStreet,
                            Account.BillingCity,
                            Account.BillingState
                            FROM Case 
                            WHERE Account.Type='Hospital'];
        
        if(caseList <> null && !caseList.isEmpty())
            return caseList;

        return null;
    }
}