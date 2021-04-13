QDEMO
	;
	S ^MI(":WS","ROUTES","OPTIONS","qdemo","API^QDEMO")=""
	S ^MI(":WS","ROUTES","POST","qdemo","API^QDEMO")=""
	;
	Q
	;
	;
API(%Q,%R,%A)
	N %J
	S %R("mime")="application/json"
	S %R("header","Access-Control-Allow-Origin")="*"
	S %R("header","Access-Control-Allow-Headers")="Origin, X-Requested-With, Content-Type, Accept, auth, jwt"
	I '$D(@%Q("body")) Q
	N %RR D DECODE^MIWS(%Q("body"),"%RR")
	N %ROUTINE S %ROUTINE=%RR("routine")
	K %RR("routine") K %J
	K %RR
	D @(%ROUTINE_"(.%RR,.%J)")
	K @%R D ENCODE^MIWS("%J",%R)
	Q
	;
	;
EXAMPLE1(I,O)
	S OUTPUT=$NA(O("data","data"))
	F I=1:1:10 S @OUTPUT@(I)=I("data","param")_" => "_I
	Q
	;