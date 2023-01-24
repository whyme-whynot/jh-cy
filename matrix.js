/*****
 * data
 *****/

let arrayA = [ // 첫 번째 행렬
	[ 1, 2 ],
	[ 4, 5 ],
	[ 7, 8 ],
]
let arrayB = [ // 두 번째 행렬
	[ 2, 4, 8 ],
	[ 7, 14, 3 ]
]
let resultArray = []; // 두 행렬을 곱한 결과 행렬
			

/*****
 * 연산
 *****/

// 첫 번째 행렬의 열 수와, 두 번째 행렬의 행 수가 일치하면
if (arrayA[0].length == arrayB.length) {

	// 첫 번째 행렬의 행 수만큼 반복
	for (i=0; i<arrayA.length; i++) { 
		let resultR = []; // 결과 행렬의 행

		// 두 번째 행렬의 열 수만큼 반복
		for (j=0; j<arrayB[0].length; j++) {
			// 행렬의 개별 성분을 저장할 변수
			let resultE = 0; 
			
			// 행렬의 개별 성분을 저장하는 반복문
			for (k=0; k<arrayB.length; k++) {
				// arrayA의 각 행(i)의 요소(k번째) * arrayB의 각 열(j)의 요소(k번째)를 구한 뒤 더하기
				resultE = resultE + (arrayA[i][k] * arrayB[k][j]);
				// resultE += arrayA[i][k] * arrayB[k][j];
                // 변수에 계산한 값을 저장
			}

			resultR.push(resultE); // 결과 행렬의 행에 행렬성분을 push
		}
		
		resultArray.push(resultR); // 결과 행렬에 행을 push
	}

	for (l=0; l<resultArray.length; l++) { // 결과 행렬을 표시하기 위한 반복문
		document.write(resultArray[l] + '<br>');
	}

} else { // 첫 번째 행렬의 열 수와, 두 번째 행렬의 행 수가 일치하지 않으면
	document.write("행과 열의 수가 달라 곱셈 불가");
}
