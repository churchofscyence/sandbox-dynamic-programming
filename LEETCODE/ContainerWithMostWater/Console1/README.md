# JavaScript Container With Most Water

<style>
    .dataTable th {
        background: grey;
    }
    .dataTable tr:nth-child(odd){ background: orange; }
</style>

# List of Points  

<img src="Container_With_Most_Water_Ex_2.png" alt="Graph" width="800" height="600">

<div class="dataTable">

| Index | Point |
|-------|-------|
| 0     | 2     |
| 1     | 3     |
| 2     | 1     |
| 3     | 4     |

</div>

# Area Calculations

<div class="dataTable">

| Index | Comparer | Pointer | Height | Width | Area |
|-------|----------|---------|--------|-------|------|
| 0     | 0        | 1       | 2      | 1     | 2    |
| 1     | 0        | 2       | 1      | 2     | 2    |
| 2     | 0        | 3       | 2      | 3     | 6    |
| 3     | 1        | 0       | 2      | 1     | 2    |
| 4     | 1        | 2       | 1      | 1     | 1    |
| 5     | 1        | 3       | 3      | 2     | 6    |
| 6     | 2        | 0       | 1      | 2     | 2    |
| 7     | 2        | 1       | 1      | 1     | 1    |
| 8     | 2        | 3       | 1      | 1     | 1    |
| 9     | 3        | 0       | 2      | 3     | 6    |
| 10    | 3        | 1       | 3      | 2     | 6    |
| 11    | 3        | 2       | 1      | 1     | 1    |

</div>
