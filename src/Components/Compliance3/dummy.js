[
    {
      "rules": {
        "Configuration Recorder Enabled": {
          "name": "Configuration Recorder Enabled",
          "status": true
        },
        "CheckIAMRole": {
          "name": "CheckIAMRole",
          "status": true
        },
        "CheckConfigRules": {
          "name": "CheckConfigRules",
          "status": true
        },
        "Inbound Traffic In Security Groups": {
          "name": "Inbound Traffic In Security Groups",
          "status": false,
          "noncompliance": [
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-0fb5d2f52f846ae06"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-0fb5d2f52f846ae06",
              "issue": "security group sg-0fb5d2f52f846ae06 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-0897d2e5df6329f94"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-0897d2e5df6329f94",
              "issue": "security group sg-0897d2e5df6329f94 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-07791e8a54a72c98d"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-07791e8a54a72c98d",
              "issue": "security group sg-07791e8a54a72c98d contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-0d84965e1be7dcaa4"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-0d84965e1be7dcaa4",
              "issue": "security group sg-0d84965e1be7dcaa4 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-0da3f3a160def22db"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-0da3f3a160def22db",
              "issue": "security group sg-0da3f3a160def22db contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-04955ce30cbf77711"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-04955ce30cbf77711",
              "issue": "security group sg-04955ce30cbf77711 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-081c93f153da49796"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-081c93f153da49796",
              "issue": "security group sg-081c93f153da49796 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-07d429713a4dce7b2"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-07d429713a4dce7b2",
              "issue": "security group sg-07d429713a4dce7b2 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-060b568f29ec3d4b4"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-060b568f29ec3d4b4",
              "issue": "security group sg-060b568f29ec3d4b4 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-09b7fdf28fab33df5"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-09b7fdf28fab33df5",
              "issue": "security group sg-09b7fdf28fab33df5 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "baselineconfigurationcontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-055d8ef4031d98bcb"
              },
              "idstr": "baselineconfigurationcontrol001_Inbound Traffic In Security Groups_us-west-2_sg-055d8ef4031d98bcb",
              "issue": "security group sg-055d8ef4031d98bcb contains 0.0.0.0 inbound permission",
              "exempted": false
            }
          ],
          "exceptions": 0
        },
        "CloudTrail logging for S3 Bucket": {
          "name": "CloudTrail logging for S3 Bucket",
          "status": true
        }
      },
      "numberoftests": 5,
      "noncompliancecount": 11,
      "account": "130489330727",
      "passpercentage": -120,
      "failpercentage": 220,
      "executiontime": "2023-11-01-2:39:22 +0000"
    },
    {
      "rules": {
        "Inbound Traffic In Security Groups": {
          "name": "Inbound Traffic In Security Groups",
          "status": false,
          "noncompliance": [
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-0897d2e5df6329f94"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-0897d2e5df6329f94",
              "issue": "security group sg-0897d2e5df6329f94 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-081c93f153da49796"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-081c93f153da49796",
              "issue": "security group sg-081c93f153da49796 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-0fb5d2f52f846ae06"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-0fb5d2f52f846ae06",
              "issue": "security group sg-0fb5d2f52f846ae06 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-04955ce30cbf77711"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-04955ce30cbf77711",
              "issue": "security group sg-04955ce30cbf77711 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-07791e8a54a72c98d"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-07791e8a54a72c98d",
              "issue": "security group sg-07791e8a54a72c98d contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-0da3f3a160def22db"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-0da3f3a160def22db",
              "issue": "security group sg-0da3f3a160def22db contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-09b7fdf28fab33df5"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-09b7fdf28fab33df5",
              "issue": "security group sg-09b7fdf28fab33df5 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-060b568f29ec3d4b4"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-060b568f29ec3d4b4",
              "issue": "security group sg-060b568f29ec3d4b4 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-0d84965e1be7dcaa4"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-0d84965e1be7dcaa4",
              "issue": "security group sg-0d84965e1be7dcaa4 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-07d429713a4dce7b2"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-07d429713a4dce7b2",
              "issue": "security group sg-07d429713a4dce7b2 contains 0.0.0.0 inbound permission",
              "exempted": false
            },
            {
              "id": {
                "compliance": "networkcompliancecontrol001",
                "rule": "Inbound Traffic In Security Groups",
                "region": "us-west-2",
                "asset": "sg-055d8ef4031d98bcb"
              },
              "idstr": "networkcompliancecontrol001_Inbound Traffic In Security Groups_us-west-2_sg-055d8ef4031d98bcb",
              "issue": "security group sg-055d8ef4031d98bcb contains 0.0.0.0 inbound permission",
              "exempted": false
            }
          ],
          "exceptions": 0
        },
        "S3 VPC Endpoint": {
          "name": "S3 VPC Endpoint",
          "status": true
        }
      },
      "numberoftests": 2,
      "noncompliancecount": 11,
      "account": "130489330727",
      "passpercentage": -450,
      "failpercentage": 550,
      "executiontime": "2023-11-01-2:39:22 +0000"
    },
    {
      "rules": {
        "Restricted IAM Policies in Use": {
          "name": "Restricted IAM Policies in Use",
          "status": false,
          "noncompliance": [
            {
              "id": {
                "compliance": "restrictedaccessforactionscontrol001",
                "rule": "Restricted IAM Policies in Use",
                "region": "global",
                "asset": "AdministratorAccess"
              },
              "idstr": "restrictedaccessforactionscontrol001_Restricted IAM Policies in Use_global_AdministratorAccess",
              "issue": "IAM policy action contains * AdministratorAccess",
              "exempted": false
            },
            {
              "id": {
                "compliance": "restrictedaccessforactionscontrol001",
                "rule": "Restricted IAM Policies in Use",
                "region": "global",
                "asset": "POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-CKAN-pod"
              },
              "idstr": "restrictedaccessforactionscontrol001_Restricted IAM Policies in Use_global_POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-CKAN-pod",
              "issue": "IAM policy action contains * POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-CKAN-pod",
              "exempted": false
            },
            {
              "id": {
                "compliance": "restrictedaccessforactionscontrol001",
                "rule": "Restricted IAM Policies in Use",
                "region": "global",
                "asset": "POLICY-USW2-SBX-EKS-V121-PRD-EC2-SSM"
              },
              "idstr": "restrictedaccessforactionscontrol001_Restricted IAM Policies in Use_global_POLICY-USW2-SBX-EKS-V121-PRD-EC2-SSM",
              "issue": "IAM policy action contains * POLICY-USW2-SBX-EKS-V121-PRD-EC2-SSM",
              "exempted": false
            },
            {
              "id": {
                "compliance": "restrictedaccessforactionscontrol001",
                "rule": "Restricted IAM Policies in Use",
                "region": "global",
                "asset": "POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-DP-API-pod"
              },
              "idstr": "restrictedaccessforactionscontrol001_Restricted IAM Policies in Use_global_POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-DP-API-pod",
              "issue": "IAM policy action contains * POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-DP-API-pod",
              "exempted": false
            },
            {
              "id": {
                "compliance": "restrictedaccessforactionscontrol001",
                "rule": "Restricted IAM Policies in Use",
                "region": "global",
                "asset": "POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-INGESTION-POD"
              },
              "idstr": "restrictedaccessforactionscontrol001_Restricted IAM Policies in Use_global_POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-INGESTION-POD",
              "issue": "IAM policy action contains * POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-INGESTION-POD",
              "exempted": false
            },
            {
              "id": {
                "compliance": "restrictedaccessforactionscontrol001",
                "rule": "Restricted IAM Policies in Use",
                "region": "global",
                "asset": "POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-AIRFLOW-POD"
              },
              "idstr": "restrictedaccessforactionscontrol001_Restricted IAM Policies in Use_global_POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-AIRFLOW-POD",
              "issue": "IAM policy action contains * POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-AIRFLOW-POD",
              "exempted": false
            },
            {
              "id": {
                "compliance": "restrictedaccessforactionscontrol001",
                "rule": "Restricted IAM Policies in Use",
                "region": "global",
                "asset": "POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-CLOUDEZUI-POD"
              },
              "idstr": "restrictedaccessforactionscontrol001_Restricted IAM Policies in Use_global_POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-CLOUDEZUI-POD",
              "issue": "IAM policy action contains * POLICY-EKS-USW2-SBX-EKS-V121-PRD-CEZ-CLOUDEZUI-POD",
              "exempted": false
            }
          ],
          "exceptions": 0
        },
        "S3 Bucket Access Control": {
          "name": "S3 Bucket Access Control",
          "status": false,
          "noncompliance": [
            {
              "id": {
                "compliance": "restrictedaccessforactionscontrol001",
                "rule": "S3 Bucket Access Control",
                "region": "us-west-2",
                "asset": "testredshiftdbquicksight"
              },
              "idstr": "restrictedaccessforactionscontrol001_S3 Bucket Access Control_us-west-2_testredshiftdbquicksight",
              "issue": "bucket testredshiftdbquicksight does not have public access",
              "exempted": false
            }
          ],
          "exceptions": 0
        },
        "S3 Bucket Policy": {
          "name": "S3 Bucket Policy",
          "status": true
        }
      },
      "numberoftests": 3,
      "noncompliancecount": 8,
      "account": "130489330727",
      "passpercentage": -166,
      "failpercentage": 266,
      "executiontime": "2023-11-01-2:39:31 +0000"
    },
    {
      "rules": {
        "Encrypted S3 Buckets": {
          "name": "Encrypted S3 Buckets",
          "status": true
        },
        "Encrypted RDS Instances": {
          "name": "Encrypted RDS Instances",
          "status": true
        },
        "Encrypted EBS Volumes": {
          "name": "Encrypted EBS Volumes",
          "status": true
        }
      },
      "numberoftests": 3,
      "noncompliancecount": 0,
      "account": "130489330727",
      "passpercentage": 100,
      "failpercentage": 0,
      "executiontime": "2023-11-01-2:39:31 +0000"
    },
    {
      "rules": {
        "IAM Roles Present and Configured": {
          "name": "IAM Roles Present and Configured",
          "status": true
        },
        "IAM Users should be avoided": {
          "name": "IAM Users should be avoided",
          "status": true
        }
      },
      "numberoftests": 2,
      "noncompliancecount": 0,
      "account": "130489330727",
      "passpercentage": 100,
      "failpercentage": 0,
      "executiontime": "2023-11-01-2:39:23 +0000"
    },
    {
      "rules": {
        "CloudTrail Present and Logging": {
          "name": "CloudTrail Present and Logging",
          "status": false,
          "noncompliance": [
            {
              "id": {
                "compliance": "auditloggingcontrol001",
                "rule": "CloudTrail Present and Logging",
                "region": "us-west-2",
                "asset": "na"
              },
              "idstr": "auditloggingcontrol001_CloudTrail Present and Logging_us-west-2_na",
              "issue": "error fetching cloudtrail for us-west-2",
              "exempted": false
            }
          ],
          "exceptions": 0
        },
        "CloudWatch Enabled and Logging": {
          "name": "CloudWatch Enabled and Logging",
          "status": false,
          "noncompliance": [
            {
              "id": {
                "compliance": "auditloggingcontrol001",
                "rule": "CloudWatch Enabled and Logging",
                "region": "us-west-2",
                "asset": "na"
              },
              "idstr": "auditloggingcontrol001_CloudWatch Enabled and Logging_us-west-2_na",
              "issue": "User: arn:aws:sts::130489330727:assumed-role/ROLE-EKS-USW2-SBX-EKS-V121-PRD-CEZ-CLOUDEZAPI-POD/aws-sdk-java-1698849561602 is not authorized to perform: logs:DescribeLogGroups on resource: arn:aws:logs:us-west-2:130489330727:log-group::log-stream: because no identity-based policy allows the logs:DescribeLogGroups action (Service: AWSLogs; Status Code: 400; Error Code: AccessDeniedException; Request ID: 753d8521-5ef7-43c5-b692-a5ce06afde26; Proxy: null)",
              "exempted": false
            }
          ],
          "exceptions": 0
        }
      },
      "numberoftests": 2,
      "noncompliancecount": 2,
      "account": "130489330727",
      "passpercentage": 0,
      "failpercentage": 100,
      "executiontime": "2023-11-01-2:39:31 +0000"
    },
    {
      "rules": {
        "Check VPN Setup": {
          "name": "Check VPN Setup",
          "status": false,
          "noncompliance": [
            {
              "id": {
                "compliance": "130489330727",
                "rule": "Check VPN Setup",
                "region": "us-west-2",
                "asset": "na"
              },
              "idstr": "130489330727_Check VPN Setup_us-west-2_na",
              "issue": "no vpn setup found in account for us-west-2",
              "exempted": false
            }
          ],
          "exceptions": 0
        }
      },
      "numberoftests": 1,
      "noncompliancecount": 1,
      "account": "130489330727",
      "passpercentage": 0,
      "failpercentage": 100,
      "executiontime": "2023-11-01-2:39:31 +0000"
    }
  ]