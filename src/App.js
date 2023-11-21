import { Divider, Card, Space, Collapse, Image } from 'antd';
import { useState } from 'react';
import disk_imag from './assets/Screenshot 2023-11-16 at 5.04.30 PM.jpg'

function App() {
  const [nTracks, setNTracks] = useState(800);
  const [nSectors, setNSectors] = useState(180);
  const [nSectorSize, setNSectorSize] = useState(512);
  const [nSurface, setNSurface] = useState(1);
  const [nRotation, setNRotation] = useState(5000);
  const [nSeekTime, setNSeekTime] = useState(2);

  const items = [
    {
      key: '1',
      label: '1.Determine the total storage capacity of the disk? ',
      children: (
        <p>
          {' '}
          Step1. The total capacity formulation: Tracks {nTracks} *
          Sectors {nSectors} * Surface {nSurface} * Size Of per
          Sectors {nSectorSize} ≈{' '}
          {nTracks * nSectors * nSurface * nSectorSize} Bytes ({' '}
          {(
            (nTracks * nSectors * nSurface * nSectorSize) /
            1000000
          ).toFixed(2)}{' '}
          MB){' '}
        </p>
      ),
    },
    {
      key: '2',
      label:
        '2.Determine the number of seek operation to read the entire disk?',
      children: (
        <p>
          Step1. We need to know the total number of tracks on the disk,
          the number of tracks is {nTracks}. <br></br>2. We need to
          know the time for each seek takes, it's {nSeekTime}.{' '}
          <br></br>The formulation: Total Tracks {nTracks} - 1 * Time
          of seek per Track {nSeekTime} = {(nTracks - 1) * nSeekTime}{' '}
          ms. <br></br> !!Hint: Tracks minus 1 because you are in
          position 1 currently.
        </p>
      ),
    },
    {
      key: '3',
      label: '3.How much data in bytes each track has?',
      children: (
        <p>
          Step1.We need to know how many sectors to each track have, is{' '}
          {nSectors}.<br></br>
          Step2.We need to know the size for each sectors, is{' '}
          {nSectorSize}bytes.
          <br></br>
          Step3.Use formulation: Sectors {nSectors} * Size of Sector{' '}
          {nSectorSize} = {nSectorSize * nSectors} bytes (
          {(nSectorSize * nSectors) / 1000000} MB)
        </p>
      ),
    },
    {
      key: '4',
      label: '4.How long 1 rotation takes?',
      children: (
        <p>
          Step1.We known the disk rotates at {nRotation} rpm per minute .
          <br></br>
          Step2.Convert minute to second, we can use 60 second /{' '}
          {nRotation} * rotates 1 ≈ {60 / nRotation} second ={' '}
          {(60 / nRotation) * 1000}ms
          <br></br>
        </p>
      ),
    },
    {
      key: '5',
      label:
        '5.How much time needed to visit all sectors of 1 track?',
      children: (
        <p>
          1.We need to know 1 track equal platter rotates once, so we
          known the number for 1 rotation takes that{' '}
          {(60 / nRotation) * 1000}ms.
        </p>
      ),
    },
    {
      key: '6',
      label:
        '6.Determine the data transfer rate per track (MB/second).',
      children: (
        <p>
          Step1. We need to know the time unit, is second.
          <br />
          Step2. In question 5, we known how long to data transfer per
          rotation which is {(60 / nRotation) * 1000}ms.
          <br />
          Step3. We need to know how many ms from a second, it's 1 second
          / {60 / nRotation} second ≈{' '}
          {(1 / (60 / nRotation)).toFixed(2)} rotates / second.
          <br />
          Step4. Using the formulation to get how many bytes in each
          rotates, it equal size of track. We can see the question 3,
          the track size is Sectors {nSectors} * Size of Sector{' '}
          {nSectorSize} = {nSectorSize * nSectors} bytes (
          {(nSectorSize * nSectors) / 1000000} MB).
          <br />
          Step5. Now we use number of rotates in second (
          {(1 / (60 / nRotation)).toFixed(2)}) times size of one
          rotate ({(nSectorSize * nSectors) / 1000000} MB), finally
          the result is{' '}
          {(
            ((1 / (60 / nRotation)).toFixed(2) *
              (nSectorSize * nSectors)) /
            1000000
          ).toFixed(2)}{' '}
          MB/second
        </p>
      ),
    },
    {
      key: '7',
      label:
        '7.What is the average rotational delay of this disk? (half rotation)',
      children: (
        <p>
          Step1. We known 1 rotation takes {(60 / nRotation) * 1000}ms,
          this question to ask how long does half oration takes.
          <br />
          Step2. The formulation : {(60 / nRotation) * 1000} ms * 1/2 ={' '}
          {((60 / nRotation) * 1000) / 2} ms
        </p>
      ),
    },
    {
      key: '8',
      label: '8. What is the transfer time of 1 sector?',
      children: (
        <p>
          Step1. We known 1 rotation of track takes{' '}
          {(60 / nRotation) * 1000}ms (References from question 4).
          <br />
          Step2. And 1 track includes {nSectors} sectors.
          <br />
          Step3. So each sector should takes 1/{nSectors} represent 1
          sectors' time.
          <br />
          Step4. The formulation : 1/{nSectors} *{' '}
          {(60 / nRotation) * 1000}ms ≈
          {((1 / nSectors) * ((60 / nRotation) * 1000)).toFixed(3)} ms
        </p>
      ),
    },
  ];
  return (
    <div className="App">
      <div className="projectFrame">
        <div className="header">
          <h3>COP 4610: Operating Systems Principles</h3>
          <h4>Disk Practice</h4>
        </div>
        <Divider></Divider>
        <div className="cards">
          <Space direction="horizontal" size={10}>
            <Card
              title="Disk Practice"
              style={{
                width: 550,
                height: 500,
              }}
            >
              <p>
                A disk has {nTracks} tracks per surface, {nSectors}{' '}
                sectors per track, and {nSectorSize} bytes per sector.
                The disk has {nSurface} surface. The disk rotates at{' '}
                {nRotation} rpm (rotations per minute). The seek time
                between adjacent tracks is {nSeekTime} ms.
              </p>
            </Card>
            <Card
              title="Variables"
              style={{
                width: 400,
              }}
            >
              <p>Total Tracks = {nTracks}</p>
              <p>Total Sectors = {nSectors}</p>
              <p>1 Sector Size = {nSectorSize} bytes</p>
              <p>Surface = {nSurface}</p>
              <p>Rotation = {nRotation} rpm/min</p>
              <p>Seek time = {nSeekTime}ms</p>
            </Card>
            <Card
              title="Variables"
              style={{
                width: 550,
              }}
            >
              <Image width={800} height={400} src={disk_imag} />
            </Card>
          </Space>
        </div>
        <div className="questions">
          <Collapse items={items} defaultActiveKey={['1']} />
        </div>
      </div>
    </div>
  );
}

export default App;
