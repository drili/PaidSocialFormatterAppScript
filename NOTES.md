# Social Mon. Tool formattering

### GREEN FIELDS:
	current30D:
		((CURRENT 30D - PREV 30D) / PREV 30D) > THRESHHOLD
	current7D:
		((CURRENT 7D - AVG 7D) / AVG 7D) > THRESHHOLD
	yesterday:
		((YESTERDAY - LAST WEEK) / LAST WEEK) > THRESHHOLD

### RED FIELDS:
	current30D:
		((CURRENT 30D - PREV 30D) / PREV 30D) <= THRESHHOLD
	current7D:
		((CURRENT 7D - AVG 7D) / AVG 7D) <= THRESHHOLD
	yesterday:
		((YESTERDAY - LAST WEEK) / LAST WEEK) <= THRESHHOLD

var treshold = x% [C6]
	
- STEPS (GREEN current30D)
	1. Fetch all rows from [I11 - I1000] (Current 30d)
	2. Fetch all rows from [H11 - H1000] (Prev 30d)
	3. Insert to multidimensional array e.g.:
		[{
			[0] => {
				["data_01"] => {
					["current30D"] => 5151,
					["prev30D"] => 4124,
					["field_index_value"] => I11
				},
				["data_02"] => {
					["current30D"] => 5151,
					["prev30D"] => 4124,
					["field_index_value"] => I12
				}
				...
			}
		}]
	4. Loop array, if greater than threshold, apply green background to field_index_value
	
- Repeat same steps for current7D & yesterday
- Repeat same steps for RED fields

---

TESTS

1. current30D:
	((343,716 - 177,914) / 177,914) = 0.9397722270505773
	threshold = 0.3
