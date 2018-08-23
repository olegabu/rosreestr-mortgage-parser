# Parser for XML and Zip files with electronic mortgages from RosReestr

Generate mappings

```bash
java --add-modules java.xml.bind -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar -d mappings -p Mortgage  schemas/mortgage/Mortgage_v0.1.xsd 
java --add-modules java.xml.bind -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar -d mappings -p TRequest schemas/mortgage/TRequest.xsd 
java --add-modules java.xml.bind -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar -d mappings -p Request  schemas/electronicMortgage/electronic-mortgage.xsd 

```
