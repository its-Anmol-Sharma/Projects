var a=[4,6,2,5,2]
var a2=[3,1,5,7,3]
for( let i=0;i<a2.length;i++)
    {
        let num = a2[i];
        a.push(num);
    }
    for(let i=0;i<a.length;i++)
    {
        for(let j=0;j<a.length-1;j++)
        {
            if(a[j]>a[j+1])
            {
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    console.log(a);