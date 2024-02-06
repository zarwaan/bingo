for i in range(1,76):
    if(i%15==1):
        print("<tr>")
    print('<td id="c',i,'">',i,'</td>')
    if(i%15==0):
        print("</tr>")