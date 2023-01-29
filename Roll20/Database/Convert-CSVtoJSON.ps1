param(
    [string]$FileName
)

$csv = Import-Csv $FileName

$json = @{}

foreach($row in $csv) 
{
    $pkey = @($row.PSObject.Properties)[0].value
    $json[$pkey] = $row
}

$json | ConvertTo-Json

