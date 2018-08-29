import itertools

input_file_loc = "/Users/ranakhalil/Desktop/git/Thesis/results/wapiti/wavsep/configured/report/wapiti-wavsep-configured.txt"
output_file_loc = "/Users/ranakhalil/Desktop/git/Thesis/results/wapiti/wavsep/wapiti-wavsep-configured.csv"

lines = []
new_vuln_string = "********************************************************************************"
new_vuln_url="cURL command PoC"

with open(input_file_loc, 'r+') as in_file:

	i = 0

	for line in in_file:

		try: 
			while(i<19):
				line = next(in_file)
				i = i + 1

			if(new_vuln_string in line):
				next(in_file)
				line = next(in_file)
				lines.append(line)



			if(new_vuln_url in line):
			   lines.append(line[26:line.find('.jsp')]) #remove the string cURL command PoC : "curl " from line
			

		except StopIteration:
			pass

with open(output_file_loc, 'w') as out_file:
	for elem in lines:
		out_file.write(elem + "\n")

"""
lines_seen = set()

with open(output_file_loc, 'w') as out_file:
	for elem in lines:
		if elem not in lines_seen:
			out_file.write(elem + "\n")
			lines_seen.add(elem)
"""