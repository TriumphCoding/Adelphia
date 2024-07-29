param(
    [string]$FolderName = ".\"
)

function Get-JsonString {
    param (
        [string]$FileName
    )
    $csv = Import-Csv $FileName
    $json = @{}

    foreach($row in $csv) 
    {
        $pkey = @($row.PSObject.Properties)[0].value
        $json[$pkey] = $row
    }

    return ($json | ConvertTo-Json)
}

$outString = ""

(Get-ChildItem $FolderName -Filter "*.csv") | Foreach-Object {


    $outText = Get-JsonString $PSItem.FullName
    $outFile = $PSItem.FullName.Replace(".csv",".json")
    Write-Host "$($PSItem.FullName) > $outFile"
    $outHeader = $PSItem.Name.Replace(".csv","")
    $outText | Out-File -FilePath $outFile
    $outString += [string]::IsNullOrEmpty($outString) ? "const $outHeader = $outText" : "`n`nconst $outHeader = $outText"
}

$outString | Out-File -FilePath ".\_FullExport.js"
