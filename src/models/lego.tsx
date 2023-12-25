import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import legoScene from '../assets/3d/wind.glb';
import { Mesh } from 'three';
function Lego(props) {
  const { nodes, materials } = useGLTF(legoScene);
  const legoRef = useRef<Mesh>(null!);
  return (
    <group ref={legoRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part.geometry}
        material={materials['mb:o:176:308']}
        position={[-444, 27.915, -56]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part001.geometry}
        material={materials['mb:o:176:308']}
        position={[-472, 12.715, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part002.geometry}
        material={materials['mb:o:176:308']}
        position={[-412, 27.915, -88]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part003.geometry}
        material={materials['mb:o:254:194']}
        position={[-444, 19.115, -108]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part004.geometry}
        material={materials['mb:o:325:192']}
        position={[-444, 105.515, -60]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part005.geometry}
        material={materials['mb:o:325:192']}
        position={[-444, 105.515, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part006.geometry}
        material={materials['mb:o:151:138']}
        position={[-460, 41.515, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part007.geometry}
        material={materials['mb:o:151:138']}
        position={[-428, 41.515, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part008.geometry}
        material={materials['mb:o:151:138']}
        position={[-460, 22.315, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part009.geometry}
        material={materials['mb:o:151:138']}
        position={[-428, 22.315, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part010.geometry}
        material={materials['mb:o:151:138']}
        position={[-416, 41.515, -72]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part011.geometry}
        material={materials['mb:o:151:138']}
        position={[-416, 41.515, -104]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part012.geometry}
        material={materials['mb:o:151:138']}
        position={[-416, 22.315, -72]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part013.geometry}
        material={materials['mb:o:151:138']}
        position={[-416, 12.715, -72]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part014.geometry}
        material={materials['mb:o:151:138']}
        position={[-416, 22.315, -104]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part015.geometry}
        material={materials['mb:o:151:138']}
        position={[-416, 12.715, -96]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part016.geometry}
        material={materials['mb:o:454:194']}
        position={[-444, 31.915, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part017.geometry}
        material={materials['mb:o:454:194']}
        position={[-416, 31.915, -88]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part018.geometry}
        material={materials['mb:o:553:26']}
        position={[-477.694, 54.859, -87.975]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part019.geometry}
        material={materials['mb:o:553:26']}
        position={[-444, 48.315, -58.6]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part020.geometry}
        material={materials['mb:o:553:26']}
        position={[-414.6, 48.315, -88]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part021.geometry}
        material={materials['mb:o:63:199']}
        position={[-456, 95.915, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part022.geometry}
        material={materials['mb:o:63:199']}
        position={[-432, 95.915, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part023.geometry}
        material={materials['mb:o:63:199']}
        position={[-464, 73.515, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part024.geometry}
        material={materials['mb:o:63:199']}
        position={[-424, 73.515, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part025.geometry}
        material={materials['mb:o:63:199']}
        position={[-416, 73.515, -68]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part026.geometry}
        material={materials['mb:o:63:199']}
        position={[-472, 73.515, -68]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part027.geometry}
        material={materials['mb:o:63:199']}
        position={[-472, 73.515, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part028.geometry}
        material={materials['mb:o:63:199']}
        position={[-416, 73.515, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part029.geometry}
        material={materials['mb:o:63:199']}
        position={[-456, 95.915, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part030.geometry}
        material={materials['mb:o:63:199']}
        position={[-432, 95.915, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part031.geometry}
        material={materials['mb:o:63:199']}
        position={[-464, 31.915, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part032.geometry}
        material={materials['mb:o:63:199']}
        position={[-424, 31.915, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part033.geometry}
        material={materials['mb:o:63:199']}
        position={[-472, 41.515, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part034.geometry}
        material={materials['mb:o:63:199']}
        position={[-416, 31.915, -68]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part035.geometry}
        material={materials['mb:o:63:199']}
        position={[-416, 31.915, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part036.geometry}
        material={materials['mb:o:63:199']}
        position={[-472, 22.315, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part037.geometry}
        material={materials['mb:o:63:199']}
        position={[-472, 12.715, -68]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part038.geometry}
        material={materials['mb:o:63:199']}
        position={[-416, 12.715, -84]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part039.geometry}
        material={materials['mb:o:512:5']}
        position={[-444, 124.715, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part040.geometry}
        material={materials['mb:o:166:138']}
        position={[-444, 60.715, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part041.geometry}
        material={materials['mb:o:166:138']}
        position={[-444, 12.715, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part042.geometry}
        material={materials['mb:o:166:138']}
        position={[-416, 60.715, -88]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part043.geometry}
        material={materials['mb:o:67:138']}
        position={[-444, 134.315, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part044.geometry}
        material={materials['mb:o:67:192']}
        position={[-468, -9.685, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part045.geometry}
        material={materials['mb:o:67:192']}
        position={[-420, -9.685, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part046.geometry}
        material={materials['mb:o:356:5']}
        position={[-420.612, 110.581, -88]}
        rotation={[Math.PI / 2, -0.96, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part047.geometry}
        material={materials['mb:o:356:5']}
        position={[-467.388, 110.581, -88]}
        rotation={[Math.PI / 2, 0.96, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part048.geometry}
        material={materials['mb:o:38:192']}
        position={[-444, 92.715, -64]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part049.geometry}
        material={materials['mb:o:38:192']}
        position={[-444, 70.315, -64]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part050.geometry}
        material={materials['mb:o:38:192']}
        position={[-444, 70.315, -112]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part051.geometry}
        material={materials['mb:o:38:192']}
        position={[-444, 92.715, -112]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part052.geometry}
        material={materials['mb:o:38:192']}
        position={[-468, 9.515, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part053.geometry}
        material={materials['mb:o:38:192']}
        position={[-420, 9.515, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part054.geometry}
        material={materials['mb:o:848:192']}
        position={[-432.085, 136.729, -64]}
        rotation={[Math.PI / 2, -0.96, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part055.geometry}
        material={materials['mb:o:848:192']}
        position={[-432.085, 136.729, -112]}
        rotation={[Math.PI / 2, -0.96, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part056.geometry}
        material={materials['mb:o:848:192']}
        position={[-455.915, 136.729, -64]}
        rotation={[Math.PI / 2, 0.96, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part057.geometry}
        material={materials['mb:o:848:192']}
        position={[-455.915, 136.729, -112]}
        rotation={[Math.PI / 2, 0.96, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part058.geometry}
        material={materials['mb:o:4:138']}
        position={[-452, 115.115, -60]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part059.geometry}
        material={materials['mb:o:4:138']}
        position={[-460, 105.515, -60]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part060.geometry}
        material={materials['mb:o:4:138']}
        position={[-428, 105.515, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part061.geometry}
        material={materials['mb:o:4:138']}
        position={[-468, 95.915, -60]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part062.geometry}
        material={materials['mb:o:4:138']}
        position={[-420, 95.915, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part063.geometry}
        material={materials['mb:o:4:138']}
        position={[-460, 105.515, -116]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part064.geometry}
        material={materials['mb:o:4:138']}
        position={[-428, 105.515, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part065.geometry}
        material={materials['mb:o:4:138']}
        position={[-468, 95.915, -116]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part066.geometry}
        material={materials['mb:o:4:138']}
        position={[-420, 95.915, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part067.geometry}
        material={materials['mb:o:4:138']}
        position={[-436, 115.115, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part068.geometry}
        material={materials['mb:o:4:138']}
        position={[-452, 115.115, -116]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part069.geometry}
        material={materials['mb:o:4:138']}
        position={[-436, 115.115, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part070.geometry}
        material={materials['mb:o:35:192']}
        position={[-472, 83.115, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part071.geometry}
        material={materials['mb:o:35:192']}
        position={[-416, 83.115, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part072.geometry}
        material={materials['mb:o:35:192']}
        position={[-472, 73.515, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part073.geometry}
        material={materials['mb:o:35:192']}
        position={[-416, 73.515, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part074.geometry}
        material={materials['mb:o:35:194']}
        position={[-464, 51.115, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part075.geometry}
        material={materials['mb:o:35:194']}
        position={[-424, 51.115, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part076.geometry}
        material={materials['mb:o:35:192']}
        position={[-472, 83.115, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part077.geometry}
        material={materials['mb:o:35:192']}
        position={[-416, 83.115, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part078.geometry}
        material={materials['mb:o:35:192']}
        position={[-472, 73.515, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part079.geometry}
        material={materials['mb:o:35:192']}
        position={[-416, 73.515, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part080.geometry}
        material={materials['mb:o:35:194']}
        position={[-456, 31.915, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part081.geometry}
        material={materials['mb:o:35:194']}
        position={[-432, 31.915, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part082.geometry}
        material={materials['mb:o:35:194']}
        position={[-416, 51.115, -68]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part083.geometry}
        material={materials['mb:o:35:194']}
        position={[-416, 51.115, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part084.geometry}
        material={materials['mb:o:35:194']}
        position={[-416, 31.915, -76]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part085.geometry}
        material={materials['mb:o:35:194']}
        position={[-472, 31.915, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part086.geometry}
        material={materials['mb:o:35:194']}
        position={[-416, 31.915, -100]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part087.geometry}
        material={materials['mb:o:64:199']}
        position={[-464, 3.115, -87.998]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part088.geometry}
        material={materials['mb:o:64:199']}
        position={[-443.998, 3.115, -68]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part089.geometry}
        material={materials['mb:o:64:199']}
        position={[-424, 3.115, -87.998]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part090.geometry}
        material={materials['mb:o:64:199']}
        position={[-443.998, 3.115, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part091.geometry}
        material={materials['mb:o:66:24']}
        position={[-444, 22.315, -104]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part092.geometry}
        material={materials['mb:o:66:24']}
        position={[-444, 22.315, -112]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part093.geometry}
        material={materials['mb:o:1221:26']}
        position={[-444, 101.715, -80]}
        rotation={[-Math.PI / 2, -Math.PI / 4, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part094.geometry}
        material={materials['mb:o:1221:26']}
        position={[-444, 91.115, -88]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part095.geometry}
        material={materials['mb:o:83:24']}
        position={[-444, 101.715, -74]}
        rotation={[0, 0, -2.356]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part096.geometry}
        material={materials['mb:o:83:24']}
        position={[-444, 101.715, -86]}
        rotation={[0, 0, -2.356]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part097.geometry}
        material={materials['mb:o:83:24']}
        position={[-444, 85.115, -88]}
        rotation={[-Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part098.geometry}
        material={materials['mb:o:83:24']}
        position={[-444, 51.515, -88]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part099.geometry}
        material={materials['mb:o:83:24']}
        position={[-410, 18.515, -108]}
        rotation={[-Math.PI, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part100.geometry}
        material={materials['mb:o:277:192']}
        position={[-472, -6.485, -88]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1000.geometry}
        material={materials['mb:o:802:115']}
        position={[-483.971, -22.4, -151.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1001.geometry}
        material={materials['mb:o:824:119']}
        position={[-408.02, -22.4, -171.852]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1002.geometry}
        material={materials['mb:o:1294:119']}
        position={[-483.934, 12.8, 72.142]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1003.geometry}
        material={materials['mb:o:1294:119']}
        position={[-403.896, -3.2, 88.147]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1004.geometry}
        material={materials['mb:o:2907:199']}
        position={[-475.914, 3.2, 116.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1005.geometry}
        material={materials['mb:o:2907:119']}
        position={[-475.894, 9.6, 60.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1006.geometry}
        material={materials['mb:o:2907:119']}
        position={[-395.912, -12.8, 4.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1007.geometry}
        material={materials['mb:o:2907:119']}
        position={[-403.912, -6.4, 4.136]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1008.geometry}
        material={materials['mb:o:2907:119']}
        position={[-395.951, -12.8, 140.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1009.geometry}
        material={materials['mb:o:2907:115']}
        position={[-395.143, -8.8, 148.145]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part101.geometry}
        material={materials['mb:o:277:192']}
        position={[-444, -6.485, -60]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1010.geometry}
        material={materials['mb:o:1642:138']}
        position={[-403.942, -19.2, 196.133]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1011.geometry}
        material={materials['mb:o:217:138']}
        position={[-439.943, -12.8, 192.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1012.geometry}
        material={materials['mb:o:3678:119']}
        position={[-395.915, 0, 12.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1013.geometry}
        material={materials['mb:o:150:308']}
        position={[-471.951, -16, 8.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1014.geometry}
        material={materials['mb:o:150:308']}
        position={[-439.951, -16, 48.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1015.geometry}
        material={materials['mb:o:150:308']}
        position={[-479.915, -16, 112.157]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1016.geometry}
        material={materials['mb:o:63:119']}
        position={[-475.927, 0, 76.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1017.geometry}
        material={materials['mb:o:63:119']}
        position={[-475.933, 0, 60.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1018.geometry}
        material={materials['mb:o:63:119']}
        position={[-395.981, -12.8, 52.139]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1019.geometry}
        material={materials['mb:o:63:115']}
        position={[-403.959, -12.8, 116.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part102.geometry}
        material={materials['mb:o:277:192']}
        position={[-416, -6.485, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1020.geometry}
        material={materials['mb:o:332:308']}
        position={[-479.934, -16, 56.157]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1021.geometry}
        material={materials['mb:o:358:308']}
        position={[-403.988, -16, 32.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1022.geometry}
        material={materials['mb:o:67:138']}
        position={[-455.949, -16, 176.165]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1023.geometry}
        material={materials['mb:o:67:308']}
        position={[-479.904, -12.8, 144.157]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1024.geometry}
        material={materials['mb:o:67:308']}
        position={[-479.904, -9.6, 144.157]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1025.geometry}
        material={materials['mb:o:281:138']}
        position={[-403.949, -19.2, 208.167]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1026.geometry}
        material={materials['mb:o:281:138']}
        position={[-423.95, -19.2, 212.16]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1027.geometry}
        material={materials['mb:o:281:119']}
        position={[-391.934, -11.2, 68.14]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1028.geometry}
        material={materials['mb:o:281:119']}
        position={[-399.918, -6.4, 20.137]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1029.geometry}
        material={materials['mb:o:45:138']}
        position={[-423.943, -12.8, 192.16]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part103.geometry}
        material={materials['mb:o:277:192']}
        position={[-444, -6.485, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1030.geometry}
        material={materials['mb:o:33:27']}
        position={[-431.987, -3.2, 36.151]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1031.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.979, 0, 60.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1032.geometry}
        material={materials['mb:o:33:138']}
        position={[-435.974, 0, 48.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1033.geometry}
        material={materials['mb:o:33:138']}
        position={[-435.966, 0, 24.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1034.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.962, 0, 12.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1035.geometry}
        material={materials['mb:o:33:138']}
        position={[-451.963, -3.2, 8.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1036.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.972, 0, 40.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1037.geometry}
        material={materials['mb:o:33:138']}
        position={[-451.988, -3.2, 32.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1038.geometry}
        material={materials['mb:o:33:138']}
        position={[-443.969, -6.4, 160.153]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1039.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.969, -6.4, 160.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part104.geometry}
        material={materials['mb:o:280:5']}
        position={[-472, 51.115, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1040.geometry}
        material={materials['mb:o:33:138']}
        position={[-423.951, -6.4, 140.148]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1041.geometry}
        material={materials['mb:o:33:138']}
        position={[-459.955, -6.4, 152.136]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1042.geometry}
        material={materials['mb:o:33:138']}
        position={[-427.958, -6.4, 120.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1043.geometry}
        material={materials['mb:o:33:138']}
        position={[-451.963, -6.4, 104.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1044.geometry}
        material={materials['mb:o:33:138']}
        position={[-423.973, -6.4, 76.148]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1045.geometry}
        material={materials['mb:o:33:138']}
        position={[-443.95, -3.2, 104.153]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1046.geometry}
        material={materials['mb:o:33:330']}
        position={[-467.95, -3.2, 104.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1047.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.95, -3.2, 104.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1048.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.941, -3.2, 80.164]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1049.geometry}
        material={materials['mb:o:33:25']}
        position={[-423.976, -12.8, 180.16]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part105.geometry}
        material={materials['mb:o:892:26']}
        position={[-432.686, 90.402, -124]}
        rotation={[Math.PI / 2, -Math.PI / 4, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1050.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.976, -12.8, 180.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1051.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.959, -6.4, 116.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1052.geometry}
        material={materials['mb:o:33:138']}
        position={[-455.956, -6.4, 124.148]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1053.geometry}
        material={materials['mb:o:33:138']}
        position={[-443.958, -6.4, 128.153]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1054.geometry}
        material={materials['mb:o:33:138']}
        position={[-459.958, -9.6, 160.136]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1055.geometry}
        material={materials['mb:o:33:138']}
        position={[-419.974, -9.6, 176.161]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1056.geometry}
        material={materials['mb:o:33:138']}
        position={[-455.976, -12.8, 180.148]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1057.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.946, -12.8, 184.136]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1058.geometry}
        material={materials['mb:o:33:138']}
        position={[-455.939, -19.2, 204.151]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1059.geometry}
        material={materials['mb:o:33:27']}
        position={[-451.941, -16, 200.15]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part106.geometry}
        material={materials['mb:o:1913:199']}
        position={[-444, 45.515, -88]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1060.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.963, 0, 16.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1061.geometry}
        material={materials['mb:o:33:138']}
        position={[-475.961, -3.2, 8.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1062.geometry}
        material={materials['mb:o:33:330']}
        position={[-467.969, -6.4, 160.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1063.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.961, -6.4, 136.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1064.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.896, -9.6, 168.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1065.geometry}
        material={materials['mb:o:33:115']}
        position={[-479.892, -13.6, 177.757]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1066.geometry}
        material={materials['mb:o:33:308']}
        position={[-479.897, -12.8, 164.157]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1067.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.898, -6.4, 160.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1068.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.904, -3.2, 144.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1069.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.915, -3.2, 112.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part107.geometry}
        material={materials['mb:o:160:199']}
        position={[-444, 51.115, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1070.geometry}
        material={materials['mb:o:33:119']}
        position={[-478.315, 4, 128.155]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1071.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.115, 4, 128.156]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1072.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.898, 3.2, 120.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1073.geometry}
        material={materials['mb:o:33:119']}
        position={[-479.905, 0, 140.157]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1074.geometry}
        material={materials['mb:o:33:119']}
        position={[-471.921, 5.6, 88.157]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1075.geometry}
        material={materials['mb:o:33:115']}
        position={[-475.921, 9.6, 88.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1076.geometry}
        material={materials['mb:o:33:119']}
        position={[-478.307, 7.2, 104.155]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1077.geometry}
        material={materials['mb:o:33:115']}
        position={[-478.287, 7.2, 48.155]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1078.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.939, -3.2, 72.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1079.geometry}
        material={materials['mb:o:33:138']}
        position={[-451.974, -6.4, 72.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part108.geometry}
        material={materials['mb:o:160:199']}
        position={[-416, 51.115, -88]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1080.geometry}
        material={materials['mb:o:33:138']}
        position={[-459.972, -6.4, 80.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1081.geometry}
        material={materials['mb:o:33:119']}
        position={[-479.926, 3.2, 36.14]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1082.geometry}
        material={materials['mb:o:33:138']}
        position={[-475.969, 0, 8.147]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1083.geometry}
        material={materials['mb:o:33:119']}
        position={[-479.926, 6.4, 36.14]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1084.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.936, 3.2, 8.136]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1085.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.932, 3.2, 64.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1086.geometry}
        material={materials['mb:o:33:115']}
        position={[-391.944, -10.4, 96.14]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1087.geometry}
        material={materials['mb:o:33:119']}
        position={[-388.733, -7.2, 64.141]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1088.geometry}
        material={materials['mb:o:33:115']}
        position={[-391.981, -16, 52.137]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1089.geometry}
        material={materials['mb:o:33:119']}
        position={[-395.936, -19.2, 184.139]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part109.geometry}
        material={materials['mb:o:37:199']}
        position={[-423.233, 108.745, -52]}
        rotation={[Math.PI / 2, -0.96, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1090.geometry}
        material={materials['mb:o:33:115']}
        position={[-395.939, -16, 176.139]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1091.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.947, -12.8, 176.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1092.geometry}
        material={materials['mb:o:33:115']}
        position={[-398.344, -8.8, 152.143]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1093.geometry}
        material={materials['mb:o:33:119']}
        position={[-411.947, -3.2, 152.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1094.geometry}
        material={materials['mb:o:33:119']}
        position={[-395.952, -16, 136.139]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1095.geometry}
        material={materials['mb:o:33:115']}
        position={[-395.958, -16, 120.139]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1096.geometry}
        material={materials['mb:o:33:119']}
        position={[-399.951, -9.6, 140.137]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1097.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.95, -6.4, 144.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1098.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.955, -9.6, 128.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1099.geometry}
        material={materials['mb:o:33:119']}
        position={[-399.923, -6.4, 36.137]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part110.geometry}
        material={materials['mb:o:37:199']}
        position={[-423.233, 108.745, -124]}
        rotation={[Math.PI / 2, -0.96, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1100.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.974, -9.6, 72.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1101.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.983, -6.4, 48.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1102.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.896, -3.2, 96.147]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1103.geometry}
        material={materials['mb:o:33:119']}
        position={[-411.98, -3.2, 56.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1104.geometry}
        material={materials['mb:o:33:119']}
        position={[-391.915, -10.4, 12.14]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1105.geometry}
        material={materials['mb:o:33:119']}
        position={[-411.914, -3.2, 8.133]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1106.geometry}
        material={materials['mb:o:33:119']}
        position={[-415.912, 0, 4.132]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1107.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.915, 3.2, 12.136]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1108.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.962, -6.4, 140.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1109.geometry}
        material={materials['mb:o:33:119']}
        position={[-399.892, -6.4, 84.148]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part111.geometry}
        material={materials['mb:o:37:199']}
        position={[-464.767, 108.745, -52]}
        rotation={[Math.PI / 2, 0.96, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1110.geometry}
        material={materials['mb:o:33:115']}
        position={[-483.898, -6.4, 160.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1111.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.974, -19.2, 184.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1112.geometry}
        material={materials['mb:o:354:138']}
        position={[-435.976, -9.6, 180.155]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1113.geometry}
        material={materials['mb:o:354:138']}
        position={[-443.942, -9.6, 188.153]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1114.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.892, -13.599, 180.957]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1115.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.903, 3.2, 132.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1116.geometry}
        material={materials['mb:o:354:199']}
        position={[-483.903, 0, 148.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1117.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.914, 0, 116.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1118.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.105, 7.2, 100.156]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1119.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.086, 7.2, 44.156]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part112.geometry}
        material={materials['mb:o:37:199']}
        position={[-464.767, 108.745, -124]}
        rotation={[Math.PI / 2, 0.96, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1120.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.914, 0, 68.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1121.geometry}
        material={materials['mb:o:354:119']}
        position={[-471.914, 8.8, 68.157]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1122.geometry}
        material={materials['mb:o:354:138']}
        position={[-467.94, 0, 76.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1123.geometry}
        material={materials['mb:o:354:138']}
        position={[-459.973, -3.2, 76.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1124.geometry}
        material={materials['mb:o:354:330']}
        position={[-467.979, 0, 60.164]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1125.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.926, 0, 36.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1126.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.952, 0, 4.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1127.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.947, 3.2, 20.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1128.geometry}
        material={materials['mb:o:354:199']}
        position={[-483.947, 6.4, 20.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1129.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.927, 9.6, 76.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part113.geometry}
        material={materials['mb:o:169:194']}
        position={[-444, 25.515, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1130.geometry}
        material={materials['mb:o:354:115']}
        position={[-483.939, 6.4, 44.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1131.geometry}
        material={materials['mb:o:354:308']}
        position={[-395.912, -16, 4.139]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1132.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.912, -9.6, 4.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1133.geometry}
        material={materials['mb:o:354:115']}
        position={[-391.923, -10.4, 36.14]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1134.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.926, -16, 44.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1135.geometry}
        material={materials['mb:o:354:115']}
        position={[-387.981, -12.8, 52.136]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1136.geometry}
        material={materials['mb:o:354:115']}
        position={[-391.926, -7.2, 44.14]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1137.geometry}
        material={materials['mb:o:354:199']}
        position={[-395.94, -12.8, 172.139]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1138.geometry}
        material={materials['mb:o:354:115']}
        position={[-395.145, -8.8, 156.145]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1139.geometry}
        material={materials['mb:o:354:115']}
        position={[-391.943, -8.8, 148.146]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part114.geometry}
        material={materials['mb:o:170:1']}
        position={[-444, 25.515, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1140.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.943, -16, 164.139]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1141.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.943, -12.8, 164.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1142.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.943, -6.4, 164.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1143.geometry}
        material={materials['mb:o:354:217']}
        position={[-411.948, -6.4, 148.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1144.geometry}
        material={materials['mb:o:354:115']}
        position={[-395.956, -12.8, 124.139]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1145.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.9, 0, 28.131]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1146.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.977, -3.2, 64.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1147.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.9, -3.2, 28.133]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1148.geometry}
        material={materials['mb:o:354:119']}
        position={[-411.976, -3.2, 68.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1149.geometry}
        material={materials['mb:o:354:217']}
        position={[-419.948, -9.6, 148.147]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part115.geometry}
        material={materials['mb:o:271:199']}
        position={[-444, 95.915, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1150.geometry}
        material={materials['mb:o:354:115']}
        position={[-395.945, -6.4, 100.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1151.geometry}
        material={materials['mb:o:354:115']}
        position={[-399.903, 5.6, 20.129]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1152.geometry}
        material={materials['mb:o:354:119']}
        position={[-391.918, -9.6, 20.14]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1153.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.915, -3.2, 12.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1154.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.912, -3.2, 4.136]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1155.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.919, 12.8, 100.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1156.geometry}
        material={materials['mb:o:274:119']}
        position={[-415.955, -19.2, 128.146]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1157.geometry}
        material={materials['mb:o:274:308']}
        position={[-463.955, -19.2, 128.162]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1158.geometry}
        material={materials['mb:o:400:138']}
        position={[-439.98, -3.2, 56.154]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1159.geometry}
        material={materials['mb:o:400:138']}
        position={[-431.994, -3.2, 16.151]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part116.geometry}
        material={materials['mb:o:271:199']}
        position={[-444, 95.915, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1160.geometry}
        material={materials['mb:o:400:138']}
        position={[-439.944, -9.6, 160.154]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1161.geometry}
        material={materials['mb:o:400:138']}
        position={[-431.966, -6.4, 96.151]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1162.geometry}
        material={materials['mb:o:356:308']}
        position={[-415.986, -19.2, 40.146]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1163.geometry}
        material={materials['mb:o:356:308']}
        position={[-463.986, -19.2, 40.162]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1164.geometry}
        material={materials['mb:o:38:138']}
        position={[-431.941, -19.2, 184.157]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1165.geometry}
        material={materials['mb:o:369:138']}
        position={[-431.938, -16, 176.157]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1166.geometry}
        material={materials['mb:o:223:25']}
        position={[-439.946, -12.8, 152.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1167.geometry}
        material={materials['mb:o:36:119']}
        position={[-395.919, -16, 24.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1168.geometry}
        material={materials['mb:o:36:119']}
        position={[-395.944, -16, 96.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1169.geometry}
        material={materials['mb:o:64:138']}
        position={[-459.983, -3.2, 48.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part117.geometry}
        material={materials['mb:o:40:26']}
        position={[-444, 77.515, -88]}
        rotation={[-Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1170.geometry}
        material={materials['mb:o:64:138']}
        position={[-419.983, -3.2, 48.147]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1171.geometry}
        material={materials['mb:o:64:138']}
        position={[-451.98, 0, 56.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1172.geometry}
        material={materials['mb:o:64:138']}
        position={[-427.98, 0, 56.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1173.geometry}
        material={materials['mb:o:64:138']}
        position={[-459.991, -3.2, 24.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1174.geometry}
        material={materials['mb:o:64:138']}
        position={[-427.947, -6.4, 152.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1175.geometry}
        material={materials['mb:o:64:138']}
        position={[-419.944, -9.6, 160.147]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1176.geometry}
        material={materials['mb:o:64:138']}
        position={[-419.955, -6.4, 128.147]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1177.geometry}
        material={materials['mb:o:64:138']}
        position={[-459.966, -6.4, 96.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1178.geometry}
        material={materials['mb:o:64:27']}
        position={[-439.973, -6.4, 76.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1179.geometry}
        material={materials['mb:o:64:138']}
        position={[-427.969, -3.2, 88.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part118.geometry}
        material={materials['mb:o:40:26']}
        position={[-444, 44.715, -88]}
        rotation={[-Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1180.geometry}
        material={materials['mb:o:64:27']}
        position={[-435.955, -6.4, 128.153]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1181.geometry}
        material={materials['mb:o:64:138']}
        position={[-455.937, -6.4, 140.151]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1182.geometry}
        material={materials['mb:o:64:138']}
        position={[-435.941, -6.4, 168.153]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1183.geometry}
        material={materials['mb:o:64:138']}
        position={[-447.937, -9.6, 180.157]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1184.geometry}
        material={materials['mb:o:64:138']}
        position={[-451.943, -12.8, 192.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1185.geometry}
        material={materials['mb:o:64:138']}
        position={[-407.939, -16, 204.135]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1186.geometry}
        material={materials['mb:o:64:138']}
        position={[-455.945, -6.4, 116.151]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1187.geometry}
        material={materials['mb:o:64:119']}
        position={[-475.941, -3.2, 128.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1188.geometry}
        material={materials['mb:o:64:119']}
        position={[-475.918, 0, 104.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1189.geometry}
        material={materials['mb:o:64:119']}
        position={[-475.937, 0, 48.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part119.geometry}
        material={materials['mb:o:40:26']}
        position={[-412, 18.515, -108]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1190.geometry}
        material={materials['mb:o:64:138']}
        position={[-475.991, 0, 24.166]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1191.geometry}
        material={materials['mb:o:64:119']}
        position={[-395.947, -16, 152.139]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1192.geometry}
        material={materials['mb:o:64:119']}
        position={[-403.983, -3.2, 48.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1193.geometry}
        material={materials['mb:o:104:138']}
        position={[-459.976, -6.4, 68.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1194.geometry}
        material={materials['mb:o:104:119']}
        position={[-483.905, 3.2, 140.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1195.geometry}
        material={materials['mb:o:104:119']}
        position={[-475.903, 0, 148.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1196.geometry}
        material={materials['mb:o:104:138']}
        position={[-467.936, 0, 52.153]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1197.geometry}
        material={materials['mb:o:104:138']}
        position={[-467.937, 0, 68.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1198.geometry}
        material={materials['mb:o:104:138']}
        position={[-467.945, -3.2, 92.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1199.geometry}
        material={materials['mb:o:104:119']}
        position={[-483.925, 9.6, 84.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part120.geometry}
        material={materials['mb:o:210:192']}
        position={[-416, 92.715, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1200.geometry}
        material={materials['mb:o:104:115']}
        position={[-483.941, 9.6, 36.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1201.geometry}
        material={materials['mb:o:104:119']}
        position={[-388.737, -7.2, 76.141]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1202.geometry}
        material={materials['mb:o:104:119']}
        position={[-388.734, -15.2, 68.141]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1203.geometry}
        material={materials['mb:o:104:115']}
        position={[-403.94, -6.4, 156.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1204.geometry}
        material={materials['mb:o:104:119']}
        position={[-395.934, -3.2, 68.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1205.geometry}
        material={materials['mb:o:104:119']}
        position={[-403.937, -6.4, 76.136]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1206.geometry}
        material={materials['mb:o:104:138']}
        position={[-411.921, -3.2, 20.164]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1207.geometry}
        material={materials['mb:o:104:115']}
        position={[-395.918, -3.2, 20.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1208.geometry}
        material={materials['mb:o:9639:138']}
        position={[-439.949, -19.2, 208.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1209.geometry}
        material={materials['mb:o:203:138']}
        position={[-467.988, -3.2, 32.164]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part121.geometry}
        material={materials['mb:o:210:192']}
        position={[-472, 92.715, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1210.geometry}
        material={materials['mb:o:203:308']}
        position={[-483.943, -3.2, 32.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1211.geometry}
        material={materials['mb:o:203:138']}
        position={[-411.966, -6.4, 96.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1212.geometry}
        material={materials['mb:o:203:138']}
        position={[-467.966, -6.4, 96.164]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1213.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.953, -16, 132.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1214.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.956, -16, 124.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1215.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.956, -12.8, 124.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1216.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.976, -12.8, 68.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1217.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.976, -16, 68.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1218.geometry}
        material={materials['mb:o:203:119']}
        position={[-475.929, -3.2, 72.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1219.geometry}
        material={materials['mb:o:203:119']}
        position={[-483.94, 0, 40.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part122.geometry}
        material={materials['mb:o:210:192']}
        position={[-444, 9.515, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1220.geometry}
        material={materials['mb:o:203:308']}
        position={[-403.966, -16, 96.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1221.geometry}
        material={materials['mb:o:2:138']}
        position={[-435.945, -3.2, 92.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1222.geometry}
        material={materials['mb:o:2:138']}
        position={[-467.979, -16, 172.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1223.geometry}
        material={materials['mb:o:2:138']}
        position={[-475.923, -3.2, 28.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1224.geometry}
        material={materials['mb:o:2:119']}
        position={[-483.911, -3.2, 124.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1225.geometry}
        material={materials['mb:o:2:119']}
        position={[-483.905, -6.4, 140.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1226.geometry}
        material={materials['mb:o:2:119']}
        position={[-475.894, -9.6, 172.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1227.geometry}
        material={materials['mb:o:2:330']}
        position={[-475.905, -6.4, 140.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1228.geometry}
        material={materials['mb:o:2:119']}
        position={[-483.903, -3.2, 148.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1229.geometry}
        material={materials['mb:o:2:119']}
        position={[-483.925, 3.2, 84.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part123.geometry}
        material={materials['mb:o:340:21']}
        position={[-444, 101.715, -68]}
        rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1230.geometry}
        material={materials['mb:o:2:119']}
        position={[-483.933, 12.8, 60.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1231.geometry}
        material={materials['mb:o:2:119']}
        position={[-395.934, -16, 68.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1232.geometry}
        material={materials['mb:o:2:119']}
        position={[-403.951, -16, 140.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1233.geometry}
        material={materials['mb:o:2:115']}
        position={[-403.954, -12.8, 132.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1234.geometry}
        material={materials['mb:o:2:119']}
        position={[-403.897, -6.4, 100.131]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1235.geometry}
        material={materials['mb:o:2:138']}
        position={[-411.926, -3.2, 36.164]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1236.geometry}
        material={materials['mb:o:2:115']}
        position={[-475.897, -6.4, 164.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1237.geometry}
        material={materials['mb:o:37:119']}
        position={[-483.923, -3.2, 88.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1238.geometry}
        material={materials['mb:o:37:138']}
        position={[-411.947, -9.6, 152.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1239.geometry}
        material={materials['mb:o:37:138']}
        position={[-439.945, -19.2, 196.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part124.geometry}
        material={materials['mb:o:340:21']}
        position={[-444, 101.715, -92]}
        rotation={[Math.PI / 2, Math.PI / 4, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1240.geometry}
        material={materials['mb:o:37:115']}
        position={[-467.947, -9.6, 152.164]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1241.geometry}
        material={materials['mb:o:37:119']}
        position={[-483.921, 0, 96.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1242.geometry}
        material={materials['mb:o:37:119']}
        position={[-483.893, 6.4, 104.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1243.geometry}
        material={materials['mb:o:37:308']}
        position={[-403.969, -12.8, 88.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1244.geometry}
        material={materials['mb:o:210:138']}
        position={[-431.976, -6.4, 68.151]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1245.geometry}
        material={materials['mb:o:210:115']}
        position={[-483.893, 9.6, 104.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1246.geometry}
        material={materials['mb:o:210:119']}
        position={[-483.932, 6.4, 64.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1247.geometry}
        material={materials['mb:o:210:119']}
        position={[-483.934, 9.6, 56.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1248.geometry}
        material={materials['mb:o:210:119']}
        position={[-403.941, -9.6, 160.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1249.geometry}
        material={materials['mb:o:210:119']}
        position={[-403.896, -9.6, 96.131]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part125.geometry}
        material={materials['mb:o:243:26']}
        position={[-444, 101.715, -86.4]}
        rotation={[-Math.PI, 0, 2.356]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1250.geometry}
        material={materials['mb:o:210:119']}
        position={[-403.898, -3.2, 24.131]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1251.geometry}
        material={materials['mb:o:30:138']}
        position={[-463.943, -3.2, 84.146]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1252.geometry}
        material={materials['mb:o:30:119']}
        position={[-403.977, -6.4, 64.142]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1253.geometry}
        material={materials['mb:o:30:119']}
        position={[-407.915, 0, 12.135]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1254.geometry}
        material={materials['mb:o:103:308']}
        position={[-479.959, -6.4, 24.157]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1255.geometry}
        material={materials['mb:o:103:138']}
        position={[-439.951, -9.6, 136.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1256.geometry}
        material={materials['mb:o:103:138']}
        position={[-407.949, -16, 176.135]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1257.geometry}
        material={materials['mb:o:103:308']}
        position={[-479.901, -16, 152.157]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1258.geometry}
        material={materials['mb:o:149:308']}
        position={[-479.937, -6.4, 88.157]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1259.geometry}
        material={materials['mb:o:3:138']}
        position={[-427.976, 0, 68.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part126.geometry}
        material={materials['mb:o:870:26']}
        position={[-444, 70.315, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1260.geometry}
        material={materials['mb:o:3:138']}
        position={[-427.992, 0, 20.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1261.geometry}
        material={materials['mb:o:3:138']}
        position={[-435.998, 0, 4.153]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1262.geometry}
        material={materials['mb:o:3:330']}
        position={[-435.987, 0, 36.153]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1263.geometry}
        material={materials['mb:o:3:27']}
        position={[-443.992, 0, 20.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1264.geometry}
        material={materials['mb:o:3:330']}
        position={[-443.976, 0, 68.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1265.geometry}
        material={materials['mb:o:3:138']}
        position={[-459.979, -3.2, 60.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1266.geometry}
        material={materials['mb:o:3:119']}
        position={[-411.981, 0, 52.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1267.geometry}
        material={materials['mb:o:3:25']}
        position={[-443.94, -6.4, 172.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1268.geometry}
        material={materials['mb:o:3:330']}
        position={[-411.94, -6.4, 172.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1269.geometry}
        material={materials['mb:o:3:330']}
        position={[-427.951, -3.2, 140.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part127.geometry}
        material={materials['mb:o:149:26']}
        position={[-444, -9.685, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1270.geometry}
        material={materials['mb:o:3:27']}
        position={[-459.94, -9.6, 172.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1271.geometry}
        material={materials['mb:o:3:27']}
        position={[-427.965, -3.2, 100.15]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1272.geometry}
        material={materials['mb:o:3:138']}
        position={[-443.959, -3.2, 116.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1273.geometry}
        material={materials['mb:o:3:25']}
        position={[-459.962, -6.4, 108.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1274.geometry}
        material={materials['mb:o:3:27']}
        position={[-451.97, -6.4, 84.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1275.geometry}
        material={materials['mb:o:3:27']}
        position={[-419.959, -6.4, 116.147]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1276.geometry}
        material={materials['mb:o:3:27']}
        position={[-459.948, -9.6, 148.161]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1277.geometry}
        material={materials['mb:o:3:330']}
        position={[-435.934, -9.6, 188.153]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1278.geometry}
        material={materials['mb:o:3:330']}
        position={[-467.948, -6.4, 148.164]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1279.geometry}
        material={materials['mb:o:3:138']}
        position={[-463.943, 0, 84.146]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part128.geometry}
        material={materials['mb:o:155:38']}
        position={[-444, 22.315, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1280.geometry}
        material={materials['mb:o:3:119']}
        position={[-483.952, 6.4, 4.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1281.geometry}
        material={materials['mb:o:3:199']}
        position={[-475.927, 9.6, 76.155]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1282.geometry}
        material={materials['mb:o:3:115']}
        position={[-467.934, -16, 188.164]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1283.geometry}
        material={materials['mb:o:3:119']}
        position={[-391.948, -10.4, 108.14]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1284.geometry}
        material={materials['mb:o:3:119']}
        position={[-403.912, 0, 4.136]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1285.geometry}
        material={materials['mb:o:3:138']}
        position={[-451.959, -6.4, 132.15]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1286.geometry}
        material={materials['mb:o:544:25']}
        position={[-439.988, -6.4, 32.154]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1287.geometry}
        material={materials['mb:o:544:25']}
        position={[-439.966, -9.6, 96.154]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1288.geometry}
        material={materials['mb:o:164:308']}
        position={[-431.951, -16, 8.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1289.geometry}
        material={materials['mb:o:655:115']}
        position={[-403.903, 0, 20.131]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part129.geometry}
        material={materials['mb:o:155:38']}
        position={[-444, 9.515, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1290.geometry}
        material={materials['mb:o:357:115']}
        position={[-483.903, 6.4, 132.155]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1291.geometry}
        material={materials['mb:o:357:119']}
        position={[-483.922, 12.8, 92.158]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1292.geometry}
        material={materials['mb:o:357:119']}
        position={[-388.726, -7.2, 44.141]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1293.geometry}
        material={materials['mb:o:357:199']}
        position={[-403.897, 0, 36.131]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1294.geometry}
        material={materials['mb:o:357:115']}
        position={[-395.937, -3.2, 76.136]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1295.geometry}
        material={materials['mb:o:81:141']}
        position={[-427.984, 0, 44.15]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1296.geometry}
        material={materials['mb:o:81:141']}
        position={[-443.987, 0, 52.144]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1297.geometry}
        material={materials['mb:o:81:141']}
        position={[-451.987, -3.2, 20.147]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1298.geometry}
        material={materials['mb:o:81:330']}
        position={[-443.981, -3.2, 36.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1299.geometry}
        material={materials['mb:o:81:141']}
        position={[-427.948, -3.2, 132.139]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part130.geometry}
        material={materials['mb:o:155:38']}
        position={[-444, 101.715, -40]}
        rotation={[-Math.PI, 0, 2.356]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1300.geometry}
        material={materials['mb:o:81:141']}
        position={[-451.968, -6.4, 92.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1301.geometry}
        material={materials['mb:o:81:330']}
        position={[-427.973, -3.2, 76.15]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1302.geometry}
        material={materials['mb:o:81:141']}
        position={[-443.962, -3.2, 92.144]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1303.geometry}
        material={materials['mb:o:81:141']}
        position={[-435.945, -6.4, 156.153]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1304.geometry}
        material={materials['mb:o:81:141']}
        position={[-435.931, -12.8, 196.153]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1305.geometry}
        material={materials['mb:o:81:119']}
        position={[-475.892, -13.599, 184.157]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1306.geometry}
        material={materials['mb:o:81:119']}
        position={[-475.957, -3.2, 156.172]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1307.geometry}
        material={materials['mb:o:81:199']}
        position={[-475.916, 6.4, 116.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1308.geometry}
        material={materials['mb:o:81:115']}
        position={[-475.108, 7.2, 108.156]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1309.geometry}
        material={materials['mb:o:81:119']}
        position={[-475.089, 7.2, 52.156]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part131.geometry}
        material={materials['mb:o:3:26']}
        position={[-472, 70.315, -76]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1310.geometry}
        material={materials['mb:o:81:115']}
        position={[-467.903, 3.2, 76.158]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1311.geometry}
        material={materials['mb:o:81:119']}
        position={[-479.923, 8.8, 28.14]}
        rotation={[-Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1312.geometry}
        material={materials['mb:o:81:115']}
        position={[-483.934, 6.4, 12.136]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1313.geometry}
        material={materials['mb:o:81:119']}
        position={[-467.926, -12.8, 180.142]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1314.geometry}
        material={materials['mb:o:81:119']}
        position={[-467.962, -3.2, 140.144]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1315.geometry}
        material={materials['mb:o:81:119']}
        position={[-391.921, -10.4, 28.14]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1316.geometry}
        material={materials['mb:o:81:119']}
        position={[-395.912, -6.4, 4.139]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1317.geometry}
        material={materials['mb:o:81:119']}
        position={[-391.94, -10.4, 84.14]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1318.geometry}
        material={materials['mb:o:81:115']}
        position={[-388.732, -15.2, 60.141]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1319.geometry}
        material={materials['mb:o:81:119']}
        position={[-387.981, -9.6, 52.136]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part132.geometry}
        material={materials['mb:o:3:26']}
        position={[-472, 70.315, -100]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1320.geometry}
        material={materials['mb:o:81:119']}
        position={[-395.948, -12.8, 164.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1321.geometry}
        material={materials['mb:o:81:119']}
        position={[-411.951, -6.4, 140.144]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1322.geometry}
        material={materials['mb:o:81:199']}
        position={[-395.956, -12.8, 116.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1323.geometry}
        material={materials['mb:o:81:119']}
        position={[-395.923, -3.2, 36.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1324.geometry}
        material={materials['mb:o:81:119']}
        position={[-411.968, -3.2, 92.144]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1325.geometry}
        material={materials['mb:o:81:119']}
        position={[-395.943, -6.4, 92.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1326.geometry}
        material={materials['mb:o:81:119']}
        position={[-407.903, 5.6, 20.132]}
        rotation={[Math.PI / 2, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1327.geometry}
        material={materials['mb:o:81:115']}
        position={[-403.921, 3.2, 28.136]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1328.geometry}
        material={materials['mb:o:163:119']}
        position={[-475.922, 0, 92.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1329.geometry}
        material={materials['mb:o:163:119']}
        position={[-475.919, 0, 84.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part133.geometry}
        material={materials['mb:o:3:26']}
        position={[-416, 70.315, -76]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1330.geometry}
        material={materials['mb:o:163:115']}
        position={[-475.914, 3.2, 68.155]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1331.geometry}
        material={materials['mb:o:163:115']}
        position={[-483.923, 3.2, 28.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1332.geometry}
        material={materials['mb:o:163:119']}
        position={[-395.926, -12.8, 44.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1333.geometry}
        material={materials['mb:o:163:199']}
        position={[-395.932, -12.8, 60.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1334.geometry}
        material={materials['mb:o:163:119']}
        position={[-395.934, -12.8, 68.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1335.geometry}
        material={materials['mb:o:163:119']}
        position={[-395.937, -12.8, 76.139]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1336.geometry}
        material={materials['mb:o:802:119']}
        position={[-483.915, 0, 128.153]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1337.geometry}
        material={materials['mb:o:802:119']}
        position={[-483.907, 3.2, 104.153]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1338.geometry}
        material={materials['mb:o:802:115']}
        position={[-483.887, 3.2, 48.153]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1339.geometry}
        material={materials['mb:o:802:115']}
        position={[-403.944, -12.8, 152.142]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part134.geometry}
        material={materials['mb:o:3:26']}
        position={[-416, 70.315, -100]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1340.geometry}
        material={materials['mb:o:824:119']}
        position={[-479.894, -12.8, 172.157]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1341.geometry}
        material={materials['mb:o:1294:119']}
        position={[-307.98, 3.2, -71.87]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1342.geometry}
        material={materials['mb:o:1294:119']}
        position={[-388.019, -12.8, -87.876]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1343.geometry}
        material={materials['mb:o:2907:199']}
        position={[-316.001, -6.4, -115.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1344.geometry}
        material={materials['mb:o:2907:119']}
        position={[-316.02, 0, -59.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1345.geometry}
        material={materials['mb:o:2907:119']}
        position={[-396.002, -22.4, -3.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1346.geometry}
        material={materials['mb:o:2907:119']}
        position={[-388.002, -16, -3.864]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1347.geometry}
        material={materials['mb:o:2907:119']}
        position={[-395.964, -22.4, -139.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1348.geometry}
        material={materials['mb:o:2907:115']}
        position={[-396.772, -18.4, -147.873]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1349.geometry}
        material={materials['mb:o:1642:119']}
        position={[-387.973, -28.8, -195.862]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part135.geometry}
        material={materials['mb:o:648:199']}
        position={[-444, 6.315, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1350.geometry}
        material={materials['mb:o:217:119']}
        position={[-351.971, -22.4, -191.882]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1351.geometry}
        material={materials['mb:o:3678:119']}
        position={[-396, -9.6, -11.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1352.geometry}
        material={materials['mb:o:150:308']}
        position={[-319.964, -25.6, -7.882]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1353.geometry}
        material={materials['mb:o:150:308']}
        position={[-351.964, -25.6, -47.882]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1354.geometry}
        material={materials['mb:o:150:308']}
        position={[-312, -25.6, -111.885]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1355.geometry}
        material={materials['mb:o:63:119']}
        position={[-315.987, -9.6, -75.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1356.geometry}
        material={materials['mb:o:63:119']}
        position={[-315.982, -9.6, -59.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1357.geometry}
        material={materials['mb:o:63:119']}
        position={[-395.933, -22.4, -51.867]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1358.geometry}
        material={materials['mb:o:63:115']}
        position={[-387.956, -22.4, -115.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1359.geometry}
        material={materials['mb:o:332:308']}
        position={[-311.98, -25.6, -55.885]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part136.geometry}
        material={materials['mb:o:871:194']}
        position={[-444, 79.115, -88]}
        rotation={[0, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1360.geometry}
        material={materials['mb:o:358:308']}
        position={[-387.926, -25.6, -31.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1361.geometry}
        material={materials['mb:o:67:119']}
        position={[-335.966, -25.6, -175.893]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1362.geometry}
        material={materials['mb:o:67:308']}
        position={[-312.011, -22.4, -143.885]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1363.geometry}
        material={materials['mb:o:67:308']}
        position={[-312.011, -19.2, -143.885]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1364.geometry}
        material={materials['mb:o:281:119']}
        position={[-387.966, -28.8, -207.895]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1365.geometry}
        material={materials['mb:o:281:119']}
        position={[-367.964, -28.8, -211.888]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1366.geometry}
        material={materials['mb:o:281:119']}
        position={[-399.98, -20.8, -67.869]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1367.geometry}
        material={materials['mb:o:281:119']}
        position={[-391.997, -16, -19.866]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1368.geometry}
        material={materials['mb:o:45:119']}
        position={[-367.971, -22.4, -191.888]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1369.geometry}
        material={materials['mb:o:33:27']}
        position={[-359.928, -12.8, -35.88]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part137.geometry}
        material={materials['mb:o:282:192']}
        position={[-472, 12.715, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1370.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.936, -9.6, -59.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1371.geometry}
        material={materials['mb:o:33:119']}
        position={[-355.94, -9.6, -47.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1372.geometry}
        material={materials['mb:o:33:119']}
        position={[-355.949, -9.6, -23.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1373.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.953, -9.6, -11.882]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1374.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.951, -12.8, -7.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1375.geometry}
        material={materials['mb:o:33:119']}
        position={[-323.943, -9.6, -39.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1376.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.926, -12.8, -31.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1377.geometry}
        material={materials['mb:o:33:119']}
        position={[-347.946, -16, -159.881]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1378.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.946, -16, -159.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1379.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.964, -16, -139.877]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part138.geometry}
        material={materials['mb:o:282:192']}
        position={[-416, 12.715, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1380.geometry}
        material={materials['mb:o:33:119']}
        position={[-331.96, -16, -151.864]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1381.geometry}
        material={materials['mb:o:33:119']}
        position={[-363.957, -16, -119.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1382.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.951, -16, -103.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1383.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.942, -16, -75.877]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1384.geometry}
        material={materials['mb:o:33:119']}
        position={[-347.965, -12.8, -103.881]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1385.geometry}
        material={materials['mb:o:33:119']}
        position={[-323.965, -12.8, -103.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1386.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.965, -12.8, -103.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1387.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.973, -12.8, -79.892]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1388.geometry}
        material={materials['mb:o:33:25']}
        position={[-367.939, -22.4, -179.888]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1389.geometry}
        material={materials['mb:o:33:138']}
        position={[-351.939, -22.4, -179.882]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part139.geometry}
        material={materials['mb:o:282:192']}
        position={[-416, 12.715, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1390.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.955, -16, -115.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1391.geometry}
        material={materials['mb:o:33:119']}
        position={[-335.958, -16, -123.877]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1392.geometry}
        material={materials['mb:o:33:119']}
        position={[-347.957, -16, -127.881]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1393.geometry}
        material={materials['mb:o:33:119']}
        position={[-331.957, -19.2, -159.864]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1394.geometry}
        material={materials['mb:o:33:119']}
        position={[-371.94, -19.2, -175.889]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1395.geometry}
        material={materials['mb:o:33:119']}
        position={[-335.939, -22.4, -179.877]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1396.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.969, -22.4, -183.864]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1397.geometry}
        material={materials['mb:o:33:119']}
        position={[-335.976, -28.8, -203.88]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1398.geometry}
        material={materials['mb:o:33:27']}
        position={[-339.974, -25.6, -199.878]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1399.geometry}
        material={materials['mb:o:33:119']}
        position={[-323.951, -9.6, -15.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part140.geometry}
        material={materials['mb:o:282:192']}
        position={[-472, 12.715, -116]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1400.geometry}
        material={materials['mb:o:33:138']}
        position={[-315.954, -12.8, -7.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1401.geometry}
        material={materials['mb:o:33:330']}
        position={[-323.946, -16, -159.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1402.geometry}
        material={materials['mb:o:33:119']}
        position={[-323.954, -16, -135.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1403.geometry}
        material={materials['mb:o:33:119']}
        position={[-308.019, -19.2, -167.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1404.geometry}
        material={materials['mb:o:33:115']}
        position={[-312.022, -23.2, -177.485]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1405.geometry}
        material={materials['mb:o:33:308']}
        position={[-312.018, -22.4, -163.885]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1406.geometry}
        material={materials['mb:o:33:119']}
        position={[-308.016, -16, -159.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1407.geometry}
        material={materials['mb:o:33:119']}
        position={[-316.011, -12.8, -143.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1408.geometry}
        material={materials['mb:o:33:119']}
        position={[-316, -12.8, -111.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1409.geometry}
        material={materials['mb:o:33:119']}
        position={[-313.6, -5.6, -127.883]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part141.geometry}
        material={materials['mb:o:153:194']}
        position={[-448, 134.315, -64]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1410.geometry}
        material={materials['mb:o:33:119']}
        position={[-316.8, -5.6, -127.884]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1411.geometry}
        material={materials['mb:o:33:119']}
        position={[-308.016, -6.4, -119.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1412.geometry}
        material={materials['mb:o:33:119']}
        position={[-312.009, -9.6, -139.885]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1413.geometry}
        material={materials['mb:o:33:119']}
        position={[-319.994, -4, -87.885]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1414.geometry}
        material={materials['mb:o:33:115']}
        position={[-315.994, 0, -87.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1415.geometry}
        material={materials['mb:o:33:119']}
        position={[-313.608, -2.4, -103.883]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1416.geometry}
        material={materials['mb:o:33:115']}
        position={[-313.627, -2.4, -47.883]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1417.geometry}
        material={materials['mb:o:33:138']}
        position={[-323.976, -12.8, -71.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1418.geometry}
        material={materials['mb:o:33:138']}
        position={[-339.94, -16, -71.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1419.geometry}
        material={materials['mb:o:33:138']}
        position={[-331.943, -16, -79.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part142.geometry}
        material={materials['mb:o:153:194']}
        position={[-440, 134.315, -64]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1420.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.989, -6.4, -35.869]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1421.geometry}
        material={materials['mb:o:33:119']}
        position={[-315.946, -9.6, -7.875]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1422.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.989, -3.2, -35.869]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1423.geometry}
        material={materials['mb:o:33:119']}
        position={[-307.979, -6.4, -7.864]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1424.geometry}
        material={materials['mb:o:33:119']}
        position={[-307.983, -6.4, -63.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1425.geometry}
        material={materials['mb:o:33:115']}
        position={[-399.971, -20, -95.869]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1426.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.182, -16.8, -63.87]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1427.geometry}
        material={materials['mb:o:33:115']}
        position={[-399.933, -25.6, -51.866]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1428.geometry}
        material={materials['mb:o:33:119']}
        position={[-395.979, -28.8, -183.867]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1429.geometry}
        material={materials['mb:o:33:115']}
        position={[-395.976, -25.6, -175.867]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part143.geometry}
        material={materials['mb:o:153:194']}
        position={[-448, 134.315, -112]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1430.geometry}
        material={materials['mb:o:33:119']}
        position={[-387.968, -22.4, -175.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1431.geometry}
        material={materials['mb:o:33:115']}
        position={[-393.571, -18.4, -151.872]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1432.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.968, -12.8, -151.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1433.geometry}
        material={materials['mb:o:33:119']}
        position={[-395.962, -25.6, -135.867]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1434.geometry}
        material={materials['mb:o:33:115']}
        position={[-395.957, -25.6, -119.867]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1435.geometry}
        material={materials['mb:o:33:119']}
        position={[-391.964, -19.2, -139.866]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1436.geometry}
        material={materials['mb:o:33:119']}
        position={[-387.965, -16, -143.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1437.geometry}
        material={materials['mb:o:33:119']}
        position={[-387.96, -19.2, -127.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1438.geometry}
        material={materials['mb:o:33:119']}
        position={[-391.991, -16, -35.866]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1439.geometry}
        material={materials['mb:o:33:119']}
        position={[-387.94, -19.2, -71.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part144.geometry}
        material={materials['mb:o:153:194']}
        position={[-440, 134.315, -112]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1440.geometry}
        material={materials['mb:o:33:119']}
        position={[-387.932, -16, -47.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1441.geometry}
        material={materials['mb:o:33:119']}
        position={[-388.019, -12.8, -95.876]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1442.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.935, -12.8, -55.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1443.geometry}
        material={materials['mb:o:33:119']}
        position={[-400, -20, -11.869]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1444.geometry}
        material={materials['mb:o:33:119']}
        position={[-380.001, -12.8, -7.862]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1445.geometry}
        material={materials['mb:o:33:119']}
        position={[-376.002, -9.6, -3.86]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1446.geometry}
        material={materials['mb:o:33:119']}
        position={[-388, -6.4, -11.864]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1447.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.953, -16, -139.882]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1448.geometry}
        material={materials['mb:o:33:119']}
        position={[-392.023, -16, -83.877]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1449.geometry}
        material={materials['mb:o:33:115']}
        position={[-308.016, -16, -159.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part145.geometry}
        material={materials['mb:o:168:192']}
        position={[-408, 18.515, -108]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1450.geometry}
        material={materials['mb:o:33:138']}
        position={[-323.94, -28.8, -183.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1451.geometry}
        material={materials['mb:o:354:119']}
        position={[-355.939, -19.2, -179.884]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1452.geometry}
        material={materials['mb:o:354:119']}
        position={[-347.973, -19.2, -187.881]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1453.geometry}
        material={materials['mb:o:354:119']}
        position={[-316.022, -23.199, -180.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1454.geometry}
        material={materials['mb:o:354:119']}
        position={[-308.012, -6.4, -131.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1455.geometry}
        material={materials['mb:o:354:199']}
        position={[-308.012, -9.6, -147.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1456.geometry}
        material={materials['mb:o:354:119']}
        position={[-316.001, -9.6, -115.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1457.geometry}
        material={materials['mb:o:354:119']}
        position={[-316.809, -2.4, -99.884]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1458.geometry}
        material={materials['mb:o:354:119']}
        position={[-316.829, -2.4, -43.884]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1459.geometry}
        material={materials['mb:o:354:119']}
        position={[-316.001, -9.6, -67.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part146.geometry}
        material={materials['mb:o:728:26']}
        position={[-444, 22.315, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1460.geometry}
        material={materials['mb:o:354:119']}
        position={[-320.001, -0.8, -67.885]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1461.geometry}
        material={materials['mb:o:354:138']}
        position={[-323.975, -9.6, -75.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1462.geometry}
        material={materials['mb:o:354:119']}
        position={[-331.942, -12.8, -75.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1463.geometry}
        material={materials['mb:o:354:119']}
        position={[-323.936, -9.6, -59.892]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1464.geometry}
        material={materials['mb:o:354:119']}
        position={[-315.989, -9.6, -35.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1465.geometry}
        material={materials['mb:o:354:119']}
        position={[-307.962, -9.6, -3.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1466.geometry}
        material={materials['mb:o:354:119']}
        position={[-307.968, -6.4, -19.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1467.geometry}
        material={materials['mb:o:354:199']}
        position={[-307.968, -3.2, -19.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1468.geometry}
        material={materials['mb:o:354:119']}
        position={[-307.987, 0, -75.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1469.geometry}
        material={materials['mb:o:354:115']}
        position={[-307.976, -3.2, -43.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part147.geometry}
        material={materials['mb:o:728:26']}
        position={[-416, 22.315, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1470.geometry}
        material={materials['mb:o:354:308']}
        position={[-396.002, -25.6, -3.867]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1471.geometry}
        material={materials['mb:o:354:119']}
        position={[-396.002, -19.2, -3.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1472.geometry}
        material={materials['mb:o:354:115']}
        position={[-399.991, -20, -35.869]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1473.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.989, -25.6, -43.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1474.geometry}
        material={materials['mb:o:354:115']}
        position={[-403.933, -22.4, -51.864]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1475.geometry}
        material={materials['mb:o:354:115']}
        position={[-399.989, -16.8, -43.869]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1476.geometry}
        material={materials['mb:o:354:199']}
        position={[-395.975, -22.4, -171.867]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1477.geometry}
        material={materials['mb:o:354:115']}
        position={[-396.769, -18.4, -155.873]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1478.geometry}
        material={materials['mb:o:354:115']}
        position={[-399.972, -18.4, -147.874]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1479.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.972, -25.6, -163.867]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part148.geometry}
        material={materials['mb:o:111:194']}
        position={[-444, 61.515, -88]}
        rotation={[Math.PI, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1480.geometry}
        material={materials['mb:o:354:119']}
        position={[-387.972, -22.4, -163.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1481.geometry}
        material={materials['mb:o:354:119']}
        position={[-387.972, -16, -163.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1482.geometry}
        material={materials['mb:o:354:217']}
        position={[-379.967, -16, -147.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1483.geometry}
        material={materials['mb:o:354:115']}
        position={[-395.958, -22.4, -123.867]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1484.geometry}
        material={materials['mb:o:354:119']}
        position={[-388.015, -9.6, -27.859]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1485.geometry}
        material={materials['mb:o:354:119']}
        position={[-387.938, -12.8, -63.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1486.geometry}
        material={materials['mb:o:354:119']}
        position={[-396.015, -12.8, -27.862]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1487.geometry}
        material={materials['mb:o:354:119']}
        position={[-379.939, -12.8, -67.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1488.geometry}
        material={materials['mb:o:354:217']}
        position={[-371.967, -19.2, -147.875]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1489.geometry}
        material={materials['mb:o:354:115']}
        position={[-395.969, -16, -99.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part149.geometry}
        material={materials['mb:o:111:194']}
        position={[-428, 18.515, -108]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1490.geometry}
        material={materials['mb:o:354:115']}
        position={[-392.012, -4, -19.858]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1491.geometry}
        material={materials['mb:o:354:119']}
        position={[-399.997, -19.2, -19.869]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1492.geometry}
        material={materials['mb:o:354:119']}
        position={[-396, -12.8, -11.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1493.geometry}
        material={materials['mb:o:354:119']}
        position={[-388.002, -12.8, -3.864]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1494.geometry}
        material={materials['mb:o:354:119']}
        position={[-307.996, 3.2, -99.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1495.geometry}
        material={materials['mb:o:274:119']}
        position={[-375.96, -28.8, -127.874]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1496.geometry}
        material={materials['mb:o:274:308']}
        position={[-327.96, -28.8, -127.891]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1497.geometry}
        material={materials['mb:o:400:119']}
        position={[-351.935, -12.8, -55.882]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1498.geometry}
        material={materials['mb:o:400:119']}
        position={[-359.921, -12.8, -15.88]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1499.geometry}
        material={materials['mb:o:400:119']}
        position={[-351.971, -19.2, -159.882]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part150.geometry}
        material={materials['mb:o:111:194']}
        position={[-460, 18.515, -108]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1500.geometry}
        material={materials['mb:o:400:119']}
        position={[-359.949, -16, -95.88]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1501.geometry}
        material={materials['mb:o:356:308']}
        position={[-375.929, -28.8, -39.874]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1502.geometry}
        material={materials['mb:o:356:308']}
        position={[-327.929, -28.8, -39.891]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1503.geometry}
        material={materials['mb:o:38:138']}
        position={[-359.974, -28.8, -183.885]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1504.geometry}
        material={materials['mb:o:369:119']}
        position={[-359.977, -25.6, -175.885]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1505.geometry}
        material={materials['mb:o:223:25']}
        position={[-351.969, -22.4, -151.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1506.geometry}
        material={materials['mb:o:36:119']}
        position={[-395.996, -25.6, -23.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1507.geometry}
        material={materials['mb:o:36:119']}
        position={[-395.971, -25.6, -95.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1508.geometry}
        material={materials['mb:o:64:119']}
        position={[-331.932, -12.8, -47.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1509.geometry}
        material={materials['mb:o:64:119']}
        position={[-371.932, -12.8, -47.875]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part151.geometry}
        material={materials['mb:o:48:192']}
        position={[-492.083, 53.632, -40.72]}
        rotation={[-Math.PI / 2, Math.PI / 4, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1510.geometry}
        material={materials['mb:o:64:119']}
        position={[-339.935, -9.6, -55.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1511.geometry}
        material={materials['mb:o:64:119']}
        position={[-363.935, -9.6, -55.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1512.geometry}
        material={materials['mb:o:64:119']}
        position={[-331.924, -12.8, -23.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1513.geometry}
        material={materials['mb:o:64:119']}
        position={[-363.968, -16, -151.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1514.geometry}
        material={materials['mb:o:64:119']}
        position={[-371.971, -19.2, -159.875]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1515.geometry}
        material={materials['mb:o:64:119']}
        position={[-371.96, -16, -127.875]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1516.geometry}
        material={materials['mb:o:64:119']}
        position={[-331.949, -16, -95.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1517.geometry}
        material={materials['mb:o:64:27']}
        position={[-351.942, -16, -75.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1518.geometry}
        material={materials['mb:o:64:119']}
        position={[-363.946, -12.8, -87.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1519.geometry}
        material={materials['mb:o:64:27']}
        position={[-355.96, -16, -127.881]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part152.geometry}
        material={materials['mb:o:48:192']}
        position={[-492.083, 149.798, -43.92]}
        rotation={[Math.PI / 2, Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1520.geometry}
        material={materials['mb:o:64:119']}
        position={[-335.978, -16, -139.88]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1521.geometry}
        material={materials['mb:o:64:119']}
        position={[-355.973, -16, -167.881]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1522.geometry}
        material={materials['mb:o:64:119']}
        position={[-343.978, -19.2, -179.885]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1523.geometry}
        material={materials['mb:o:64:119']}
        position={[-339.971, -22.4, -191.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1524.geometry}
        material={materials['mb:o:64:119']}
        position={[-383.976, -25.6, -203.863]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1525.geometry}
        material={materials['mb:o:64:119']}
        position={[-335.969, -16, -115.88]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1526.geometry}
        material={materials['mb:o:64:119']}
        position={[-315.974, -12.8, -127.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1527.geometry}
        material={materials['mb:o:64:119']}
        position={[-315.997, -9.6, -103.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1528.geometry}
        material={materials['mb:o:64:119']}
        position={[-315.978, -9.6, -47.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1529.geometry}
        material={materials['mb:o:64:119']}
        position={[-315.924, -9.6, -23.895]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part153.geometry}
        material={materials['mb:o:48:192']}
        position={[-395.917, 149.798, -40.72]}
        rotation={[Math.PI / 2, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1530.geometry}
        material={materials['mb:o:64:119']}
        position={[-395.968, -25.6, -151.867]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1531.geometry}
        material={materials['mb:o:64:119']}
        position={[-387.932, -12.8, -47.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1532.geometry}
        material={materials['mb:o:104:119']}
        position={[-331.939, -16, -67.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1533.geometry}
        material={materials['mb:o:104:119']}
        position={[-308.009, -6.4, -139.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1534.geometry}
        material={materials['mb:o:104:119']}
        position={[-316.012, -9.6, -147.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1535.geometry}
        material={materials['mb:o:104:119']}
        position={[-323.979, -9.6, -51.881]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1536.geometry}
        material={materials['mb:o:104:119']}
        position={[-323.978, -9.6, -67.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1537.geometry}
        material={materials['mb:o:104:119']}
        position={[-323.969, -12.8, -91.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1538.geometry}
        material={materials['mb:o:104:119']}
        position={[-307.99, 0, -83.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1539.geometry}
        material={materials['mb:o:104:115']}
        position={[-307.973, 0, -35.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part154.geometry}
        material={materials['mb:o:48:192']}
        position={[-395.917, 53.632, -43.92]}
        rotation={[-Math.PI / 2, -Math.PI / 4, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1540.geometry}
        material={materials['mb:o:104:119']}
        position={[-403.178, -16.8, -75.87]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1541.geometry}
        material={materials['mb:o:104:119']}
        position={[-403.18, -24.8, -67.87]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1542.geometry}
        material={materials['mb:o:104:115']}
        position={[-387.975, -16, -155.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1543.geometry}
        material={materials['mb:o:104:119']}
        position={[-395.98, -12.8, -67.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1544.geometry}
        material={materials['mb:o:104:119']}
        position={[-387.978, -16, -75.864]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1545.geometry}
        material={materials['mb:o:104:119']}
        position={[-379.994, -12.8, -19.892]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1546.geometry}
        material={materials['mb:o:104:115']}
        position={[-395.997, -12.8, -19.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1547.geometry}
        material={materials['mb:o:9639:119']}
        position={[-351.966, -28.8, -207.882]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1548.geometry}
        material={materials['mb:o:203:119']}
        position={[-323.927, -12.8, -31.892]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1549.geometry}
        material={materials['mb:o:203:308']}
        position={[-307.972, -12.8, -31.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part155.geometry}
        material={materials['mb:o:46:26']}
        position={[-446.828, 104.544, -46.4]}
        rotation={[-Math.PI, 0, 2.356]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1550.geometry}
        material={materials['mb:o:203:119']}
        position={[-379.949, -16, -95.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1551.geometry}
        material={materials['mb:o:203:119']}
        position={[-323.949, -16, -95.892]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1552.geometry}
        material={materials['mb:o:203:25']}
        position={[-351.961, -25.6, -131.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1553.geometry}
        material={materials['mb:o:203:25']}
        position={[-351.959, -25.6, -123.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1554.geometry}
        material={materials['mb:o:203:25']}
        position={[-351.959, -22.4, -123.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1555.geometry}
        material={materials['mb:o:203:25']}
        position={[-351.939, -22.4, -67.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1556.geometry}
        material={materials['mb:o:203:25']}
        position={[-351.939, -25.6, -67.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1557.geometry}
        material={materials['mb:o:203:119']}
        position={[-315.986, -12.8, -71.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1558.geometry}
        material={materials['mb:o:203:119']}
        position={[-307.975, -9.6, -39.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1559.geometry}
        material={materials['mb:o:203:308']}
        position={[-387.949, -25.6, -95.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part156.geometry}
        material={materials['mb:o:46:26']}
        position={[-441.172, 98.887, -46.4]}
        rotation={[-Math.PI, 0, -Math.PI / 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1560.geometry}
        material={materials['mb:o:2:119']}
        position={[-355.969, -12.8, -91.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1561.geometry}
        material={materials['mb:o:2:138']}
        position={[-323.936, -25.6, -171.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1562.geometry}
        material={materials['mb:o:2:138']}
        position={[-315.991, -12.8, -27.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1563.geometry}
        material={materials['mb:o:2:119']}
        position={[-308.004, -12.8, -123.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1564.geometry}
        material={materials['mb:o:2:119']}
        position={[-308.009, -16, -139.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1565.geometry}
        material={materials['mb:o:2:119']}
        position={[-316.02, -19.2, -171.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1566.geometry}
        material={materials['mb:o:2:330']}
        position={[-316.009, -16, -139.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1567.geometry}
        material={materials['mb:o:2:119']}
        position={[-308.012, -12.8, -147.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1568.geometry}
        material={materials['mb:o:2:119']}
        position={[-307.99, -6.4, -83.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1569.geometry}
        material={materials['mb:o:2:119']}
        position={[-307.982, 3.2, -59.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part157.geometry}
        material={materials['mb:o:46:26']}
        position={[-441.171, 104.544, -43.2]}
        rotation={[-Math.PI, 0, -2.356]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1570.geometry}
        material={materials['mb:o:2:119']}
        position={[-395.98, -25.6, -67.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1571.geometry}
        material={materials['mb:o:2:119']}
        position={[-387.964, -25.6, -139.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1572.geometry}
        material={materials['mb:o:2:115']}
        position={[-387.961, -22.4, -131.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1573.geometry}
        material={materials['mb:o:2:119']}
        position={[-388.018, -16, -99.859]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1574.geometry}
        material={materials['mb:o:2:119']}
        position={[-379.989, -12.8, -35.892]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1575.geometry}
        material={materials['mb:o:2:115']}
        position={[-316.018, -16, -163.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1576.geometry}
        material={materials['mb:o:37:119']}
        position={[-307.991, -12.8, -87.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1577.geometry}
        material={materials['mb:o:37:119']}
        position={[-379.968, -19.2, -151.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1578.geometry}
        material={materials['mb:o:37:119']}
        position={[-351.97, -28.8, -195.882]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1579.geometry}
        material={materials['mb:o:37:115']}
        position={[-323.968, -19.2, -151.892]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part158.geometry}
        material={materials['mb:o:46:26']}
        position={[-446.828, 98.887, -43.2]}
        rotation={[-Math.PI, 0, Math.PI / 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1580.geometry}
        material={materials['mb:o:37:119']}
        position={[-307.994, -9.6, -95.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1581.geometry}
        material={materials['mb:o:37:119']}
        position={[-308.022, -3.2, -103.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1582.geometry}
        material={materials['mb:o:37:308']}
        position={[-387.946, -22.4, -87.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1583.geometry}
        material={materials['mb:o:210:119']}
        position={[-359.939, -16, -67.88]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1584.geometry}
        material={materials['mb:o:210:115']}
        position={[-308.022, 0, -103.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1585.geometry}
        material={materials['mb:o:210:119']}
        position={[-307.983, -3.2, -63.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1586.geometry}
        material={materials['mb:o:210:119']}
        position={[-307.98, 0, -55.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1587.geometry}
        material={materials['mb:o:210:119']}
        position={[-387.973, -19.2, -159.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1588.geometry}
        material={materials['mb:o:210:119']}
        position={[-388.019, -19.2, -95.859]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1589.geometry}
        material={materials['mb:o:210:119']}
        position={[-388.016, -12.8, -23.859]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part159.geometry}
        material={materials['mb:o:96:194']}
        position={[-444, 38.315, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1590.geometry}
        material={materials['mb:o:30:119']}
        position={[-327.972, -12.8, -83.874]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1591.geometry}
        material={materials['mb:o:30:119']}
        position={[-387.938, -16, -63.87]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1592.geometry}
        material={materials['mb:o:30:119']}
        position={[-384, -9.6, -11.863]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1593.geometry}
        material={materials['mb:o:103:308']}
        position={[-311.955, -16, -23.885]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1594.geometry}
        material={materials['mb:o:103:119']}
        position={[-351.964, -19.2, -135.882]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1595.geometry}
        material={materials['mb:o:103:119']}
        position={[-383.966, -25.6, -175.863]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1596.geometry}
        material={materials['mb:o:103:308']}
        position={[-312.013, -25.6, -151.885]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1597.geometry}
        material={materials['mb:o:149:308']}
        position={[-311.978, -16, -87.885]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1598.geometry}
        material={materials['mb:o:3:119']}
        position={[-363.939, -9.6, -67.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1599.geometry}
        material={materials['mb:o:3:119']}
        position={[-363.922, -9.6, -19.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part160.geometry}
        material={materials['mb:o:843:26']}
        position={[-472, 22.315, -68]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1600.geometry}
        material={materials['mb:o:3:119']}
        position={[-355.917, -9.6, -3.881]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1601.geometry}
        material={materials['mb:o:3:330']}
        position={[-355.928, -9.6, -35.881]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1602.geometry}
        material={materials['mb:o:3:27']}
        position={[-347.922, -9.6, -19.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1603.geometry}
        material={materials['mb:o:3:330']}
        position={[-347.939, -9.6, -67.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1604.geometry}
        material={materials['mb:o:3:119']}
        position={[-331.936, -12.8, -59.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1605.geometry}
        material={materials['mb:o:3:119']}
        position={[-379.933, -9.6, -51.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1606.geometry}
        material={materials['mb:o:3:25']}
        position={[-347.975, -16, -171.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1607.geometry}
        material={materials['mb:o:3:330']}
        position={[-379.975, -16, -171.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1608.geometry}
        material={materials['mb:o:3:330']}
        position={[-363.964, -12.8, -139.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1609.geometry}
        material={materials['mb:o:3:27']}
        position={[-331.975, -19.2, -171.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part161.geometry}
        material={materials['mb:o:32:194']}
        position={[-444, 12.715, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1610.geometry}
        material={materials['mb:o:3:27']}
        position={[-363.95, -12.8, -99.878]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1611.geometry}
        material={materials['mb:o:3:119']}
        position={[-347.955, -12.8, -115.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1612.geometry}
        material={materials['mb:o:3:25']}
        position={[-331.953, -16, -107.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1613.geometry}
        material={materials['mb:o:3:27']}
        position={[-339.944, -16, -83.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1614.geometry}
        material={materials['mb:o:3:27']}
        position={[-371.955, -16, -115.875]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1615.geometry}
        material={materials['mb:o:3:27']}
        position={[-331.967, -19.2, -147.889]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1616.geometry}
        material={materials['mb:o:3:330']}
        position={[-355.98, -19.2, -187.881]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1617.geometry}
        material={materials['mb:o:3:330']}
        position={[-323.967, -16, -147.892]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1618.geometry}
        material={materials['mb:o:3:119']}
        position={[-327.972, -9.6, -83.874]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1619.geometry}
        material={materials['mb:o:3:119']}
        position={[-307.962, -3.2, -3.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part162.geometry}
        material={materials['mb:o:32:192']}
        position={[-444, 101.715, -56]}
        rotation={[-Math.PI, 0, 2.356]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1620.geometry}
        material={materials['mb:o:3:199']}
        position={[-315.987, 0, -75.884]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1621.geometry}
        material={materials['mb:o:3:115']}
        position={[-323.98, -25.6, -187.892]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1622.geometry}
        material={materials['mb:o:3:119']}
        position={[-399.967, -20, -107.869]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1623.geometry}
        material={materials['mb:o:3:119']}
        position={[-388.002, -9.6, -3.864]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1624.geometry}
        material={materials['mb:o:3:119']}
        position={[-339.955, -16, -131.878]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1625.geometry}
        material={materials['mb:o:544:25']}
        position={[-351.926, -16, -31.882]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1626.geometry}
        material={materials['mb:o:544:25']}
        position={[-351.949, -19.2, -95.882]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1627.geometry}
        material={materials['mb:o:164:308']}
        position={[-359.964, -25.6, -7.882]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1628.geometry}
        material={materials['mb:o:655:115']}
        position={[-388.012, -9.6, -19.859]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1629.geometry}
        material={materials['mb:o:357:115']}
        position={[-308.012, -3.2, -131.884]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part163.geometry}
        material={materials['mb:o:32:194']}
        position={[-444, 28.715, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1630.geometry}
        material={materials['mb:o:357:119']}
        position={[-307.993, 3.2, -91.887]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1631.geometry}
        material={materials['mb:o:357:119']}
        position={[-403.189, -16.8, -43.87]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1632.geometry}
        material={materials['mb:o:357:199']}
        position={[-388.018, -9.6, -35.859]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1633.geometry}
        material={materials['mb:o:357:115']}
        position={[-395.978, -12.8, -75.864]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1634.geometry}
        material={materials['mb:o:81:141']}
        position={[-363.931, -9.6, -43.878]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1635.geometry}
        material={materials['mb:o:81:141']}
        position={[-347.928, -9.6, -51.873]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1636.geometry}
        material={materials['mb:o:81:141']}
        position={[-339.928, -12.8, -19.875]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1637.geometry}
        material={materials['mb:o:81:330']}
        position={[-347.933, -12.8, -35.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1638.geometry}
        material={materials['mb:o:81:141']}
        position={[-363.967, -12.8, -131.867]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1639.geometry}
        material={materials['mb:o:81:141']}
        position={[-339.947, -16, -91.887]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part164.geometry}
        material={materials['mb:o:94:26']}
        position={[-444, -6.485, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1640.geometry}
        material={materials['mb:o:81:330']}
        position={[-363.942, -12.8, -75.878]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1641.geometry}
        material={materials['mb:o:81:141']}
        position={[-347.953, -12.8, -91.873]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1642.geometry}
        material={materials['mb:o:81:141']}
        position={[-355.969, -16, -155.881]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1643.geometry}
        material={materials['mb:o:81:141']}
        position={[-355.983, -22.4, -195.881]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1644.geometry}
        material={materials['mb:o:81:119']}
        position={[-316.022, -23.199, -183.885]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1645.geometry}
        material={materials['mb:o:81:119']}
        position={[-315.958, -12.8, -155.901]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1646.geometry}
        material={materials['mb:o:81:199']}
        position={[-315.998, -3.2, -115.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1647.geometry}
        material={materials['mb:o:81:115']}
        position={[-316.807, -2.4, -107.884]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1648.geometry}
        material={materials['mb:o:81:119']}
        position={[-316.826, -2.4, -51.884]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1649.geometry}
        material={materials['mb:o:81:115']}
        position={[-324.012, -6.4, -75.887]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part165.geometry}
        material={materials['mb:o:70:194']}
        position={[-448, 25.515, -104]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1650.geometry}
        material={materials['mb:o:81:119']}
        position={[-311.991, -0.8, -27.869]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1651.geometry}
        material={materials['mb:o:81:115']}
        position={[-307.98, -3.2, -11.864]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1652.geometry}
        material={materials['mb:o:81:119']}
        position={[-323.989, -22.4, -179.87]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1653.geometry}
        material={materials['mb:o:81:119']}
        position={[-323.953, -12.8, -139.873]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1654.geometry}
        material={materials['mb:o:81:119']}
        position={[-399.994, -20, -27.869]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1655.geometry}
        material={materials['mb:o:81:119']}
        position={[-396.002, -16, -3.867]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1656.geometry}
        material={materials['mb:o:81:119']}
        position={[-399.975, -20, -83.869]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1657.geometry}
        material={materials['mb:o:81:115']}
        position={[-403.183, -24.8, -59.87]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1658.geometry}
        material={materials['mb:o:81:119']}
        position={[-403.933, -19.2, -51.864]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1659.geometry}
        material={materials['mb:o:81:119']}
        position={[-395.967, -22.4, -163.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part166.geometry}
        material={materials['mb:o:70:194']}
        position={[-440, 25.515, -104]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1660.geometry}
        material={materials['mb:o:81:119']}
        position={[-379.964, -16, -139.873]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1661.geometry}
        material={materials['mb:o:81:199']}
        position={[-395.958, -22.4, -115.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1662.geometry}
        material={materials['mb:o:81:119']}
        position={[-395.991, -12.8, -35.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1663.geometry}
        material={materials['mb:o:81:119']}
        position={[-379.947, -12.8, -91.873]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1664.geometry}
        material={materials['mb:o:81:119']}
        position={[-395.972, -16, -91.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1665.geometry}
        material={materials['mb:o:81:119']}
        position={[-384.012, -4, -19.86]}
        rotation={[-Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1666.geometry}
        material={materials['mb:o:81:115']}
        position={[-387.994, -6.4, -27.864]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1667.geometry}
        material={materials['mb:o:163:119']}
        position={[-315.993, -9.6, -91.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1668.geometry}
        material={materials['mb:o:163:119']}
        position={[-315.996, -9.6, -83.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1669.geometry}
        material={materials['mb:o:163:115']}
        position={[-316.001, -6.4, -67.884]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part167.geometry}
        material={materials['mb:o:70:194']}
        position={[-440, 25.515, -112]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1670.geometry}
        material={materials['mb:o:163:115']}
        position={[-307.991, -6.4, -27.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1671.geometry}
        material={materials['mb:o:163:119']}
        position={[-395.989, -22.4, -43.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1672.geometry}
        material={materials['mb:o:163:199']}
        position={[-395.983, -22.4, -59.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1673.geometry}
        material={materials['mb:o:163:119']}
        position={[-395.98, -22.4, -67.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1674.geometry}
        material={materials['mb:o:163:119']}
        position={[-395.978, -22.4, -75.867]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1675.geometry}
        material={materials['mb:o:802:119']}
        position={[-308, -9.6, -127.881]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1676.geometry}
        material={materials['mb:o:802:119']}
        position={[-308.008, -6.4, -103.881]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1677.geometry}
        material={materials['mb:o:802:115']}
        position={[-308.027, -6.4, -47.881]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1678.geometry}
        material={materials['mb:o:802:115']}
        position={[-387.971, -22.4, -151.87]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1679.geometry}
        material={materials['mb:o:824:119']}
        position={[-312.02, -22.4, -171.885]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part168.geometry}
        material={materials['mb:o:70:194']}
        position={[-448, 25.515, -112]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1680.geometry}
        material={materials['mb:o:1294:119']}
        position={[-499.983, 3.2, -79.803]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1681.geometry}
        material={materials['mb:o:1294:119']}
        position={[-580.022, -12.8, -95.808]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1682.geometry}
        material={materials['mb:o:2907:199']}
        position={[-508.004, -6.4, -123.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1683.geometry}
        material={materials['mb:o:2907:119']}
        position={[-508.023, 0, -67.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1684.geometry}
        material={materials['mb:o:2907:119']}
        position={[-588.005, -22.4, -11.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1685.geometry}
        material={materials['mb:o:2907:119']}
        position={[-580.005, -16, -11.797]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1686.geometry}
        material={materials['mb:o:2907:119']}
        position={[-587.967, -22.4, -147.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1687.geometry}
        material={materials['mb:o:2907:115']}
        position={[-588.775, -18.4, -155.806]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1688.geometry}
        material={materials['mb:o:1642:119']}
        position={[-579.976, -28.8, -203.795]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1689.geometry}
        material={materials['mb:o:217:119']}
        position={[-543.974, -22.4, -199.815]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part169.geometry}
        material={materials['mb:o:238:26']}
        position={[-444, 101.715, -104]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1690.geometry}
        material={materials['mb:o:3678:119']}
        position={[-588.002, -9.6, -19.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1691.geometry}
        material={materials['mb:o:150:308']}
        position={[-511.967, -25.6, -15.815]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1692.geometry}
        material={materials['mb:o:150:308']}
        position={[-543.967, -25.6, -55.815]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1693.geometry}
        material={materials['mb:o:150:308']}
        position={[-504.002, -25.6, -119.818]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1694.geometry}
        material={materials['mb:o:63:119']}
        position={[-507.99, -9.6, -83.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1695.geometry}
        material={materials['mb:o:63:119']}
        position={[-507.985, -9.6, -67.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1696.geometry}
        material={materials['mb:o:63:119']}
        position={[-587.936, -22.4, -59.8]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1697.geometry}
        material={materials['mb:o:63:115']}
        position={[-579.958, -22.4, -123.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1698.geometry}
        material={materials['mb:o:332:308']}
        position={[-503.983, -25.6, -63.818]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1699.geometry}
        material={materials['mb:o:358:308']}
        position={[-579.929, -25.6, -39.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part170.geometry}
        material={materials['mb:o:238:26']}
        position={[-432.686, 90.402, -136]}
        rotation={[-Math.PI / 2, -Math.PI / 4, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1700.geometry}
        material={materials['mb:o:67:119']}
        position={[-527.969, -25.6, -183.826]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1701.geometry}
        material={materials['mb:o:67:308']}
        position={[-504.014, -22.4, -151.818]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1702.geometry}
        material={materials['mb:o:67:308']}
        position={[-504.014, -19.2, -151.818]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1703.geometry}
        material={materials['mb:o:281:119']}
        position={[-579.969, -28.8, -215.828]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1704.geometry}
        material={materials['mb:o:281:119']}
        position={[-559.967, -28.8, -219.821]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1705.geometry}
        material={materials['mb:o:281:119']}
        position={[-591.983, -20.8, -75.801]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1706.geometry}
        material={materials['mb:o:281:119']}
        position={[-584, -16, -27.799]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1707.geometry}
        material={materials['mb:o:45:119']}
        position={[-559.974, -22.4, -199.821]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1708.geometry}
        material={materials['mb:o:33:27']}
        position={[-551.931, -12.8, -43.812]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1709.geometry}
        material={materials['mb:o:33:119']}
        position={[-543.939, -9.6, -67.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part171.geometry}
        material={materials['mb:o:554:192']}
        position={[-480, 37.215, -68]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1710.geometry}
        material={materials['mb:o:33:119']}
        position={[-547.943, -9.6, -55.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1711.geometry}
        material={materials['mb:o:33:119']}
        position={[-547.951, -9.6, -31.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1712.geometry}
        material={materials['mb:o:33:119']}
        position={[-543.956, -9.6, -19.815]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1713.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.954, -12.8, -15.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1714.geometry}
        material={materials['mb:o:33:119']}
        position={[-515.946, -9.6, -47.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1715.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.929, -12.8, -39.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1716.geometry}
        material={materials['mb:o:33:119']}
        position={[-539.949, -16, -167.814]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1717.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.949, -16, -167.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1718.geometry}
        material={materials['mb:o:33:119']}
        position={[-559.967, -16, -147.81]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1719.geometry}
        material={materials['mb:o:33:119']}
        position={[-523.962, -16, -159.797]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part172.geometry}
        material={materials['mb:o:85:194']}
        position={[-472, 12.715, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1720.geometry}
        material={materials['mb:o:33:119']}
        position={[-555.96, -16, -127.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1721.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.954, -16, -111.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1722.geometry}
        material={materials['mb:o:33:119']}
        position={[-559.944, -16, -83.81]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1723.geometry}
        material={materials['mb:o:33:119']}
        position={[-539.968, -12.8, -111.814]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1724.geometry}
        material={materials['mb:o:33:119']}
        position={[-515.968, -12.8, -111.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1725.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.968, -12.8, -111.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1726.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.976, -12.8, -87.825]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1727.geometry}
        material={materials['mb:o:33:25']}
        position={[-559.942, -22.4, -187.821]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1728.geometry}
        material={materials['mb:o:33:138']}
        position={[-543.942, -22.4, -187.815]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1729.geometry}
        material={materials['mb:o:33:119']}
        position={[-543.958, -16, -123.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part173.geometry}
        material={materials['mb:o:85:194']}
        position={[-416, 12.715, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1730.geometry}
        material={materials['mb:o:33:119']}
        position={[-527.961, -16, -131.81]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1731.geometry}
        material={materials['mb:o:33:119']}
        position={[-539.96, -16, -135.814]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1732.geometry}
        material={materials['mb:o:33:119']}
        position={[-523.96, -19.2, -167.797]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1733.geometry}
        material={materials['mb:o:33:138']}
        position={[-563.943, -19.2, -183.822]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1734.geometry}
        material={materials['mb:o:33:119']}
        position={[-527.942, -22.4, -187.81]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1735.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.971, -22.4, -191.797]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1736.geometry}
        material={materials['mb:o:33:119']}
        position={[-527.978, -28.8, -211.812]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1737.geometry}
        material={materials['mb:o:33:27']}
        position={[-531.977, -25.6, -207.811]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1738.geometry}
        material={materials['mb:o:33:119']}
        position={[-515.954, -9.6, -23.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1739.geometry}
        material={materials['mb:o:33:119']}
        position={[-507.957, -12.8, -15.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part174.geometry}
        material={materials['mb:o:2313:23']}
        position={[-436, 18.515, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1740.geometry}
        material={materials['mb:o:33:119']}
        position={[-515.949, -16, -167.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1741.geometry}
        material={materials['mb:o:33:119']}
        position={[-515.957, -16, -143.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1742.geometry}
        material={materials['mb:o:33:119']}
        position={[-500.022, -19.2, -175.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1743.geometry}
        material={materials['mb:o:33:115']}
        position={[-504.025, -23.2, -185.418]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1744.geometry}
        material={materials['mb:o:33:308']}
        position={[-504.02, -22.4, -171.818]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1745.geometry}
        material={materials['mb:o:33:119']}
        position={[-500.019, -16, -167.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1746.geometry}
        material={materials['mb:o:33:119']}
        position={[-508.014, -12.8, -151.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1747.geometry}
        material={materials['mb:o:33:119']}
        position={[-508.002, -12.8, -119.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1748.geometry}
        material={materials['mb:o:33:119']}
        position={[-505.602, -5.6, -135.816]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1749.geometry}
        material={materials['mb:o:33:119']}
        position={[-508.802, -5.6, -135.817]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part175.geometry}
        material={materials['mb:o:2313:5']}
        position={[-468, 18.515, -108]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1750.geometry}
        material={materials['mb:o:33:119']}
        position={[-500.019, -6.4, -127.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1751.geometry}
        material={materials['mb:o:33:119']}
        position={[-504.012, -9.6, -147.818]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1752.geometry}
        material={materials['mb:o:33:119']}
        position={[-511.997, -4, -95.818]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1753.geometry}
        material={materials['mb:o:33:115']}
        position={[-507.997, 0, -95.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1754.geometry}
        material={materials['mb:o:33:119']}
        position={[-505.611, -2.4, -111.816]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1755.geometry}
        material={materials['mb:o:33:115']}
        position={[-505.63, -2.4, -55.816]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1756.geometry}
        material={materials['mb:o:33:138']}
        position={[-515.979, -12.8, -79.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1757.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.943, -16, -79.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1758.geometry}
        material={materials['mb:o:33:138']}
        position={[-523.946, -16, -87.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1759.geometry}
        material={materials['mb:o:33:119']}
        position={[-503.991, -6.4, -43.801]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part176.geometry}
        material={materials['mb:o:2313:23']}
        position={[-452, 18.515, -108]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1760.geometry}
        material={materials['mb:o:33:119']}
        position={[-507.949, -9.6, -15.808]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1761.geometry}
        material={materials['mb:o:33:119']}
        position={[-503.991, -3.2, -43.801]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1762.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.982, -6.4, -15.797]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1763.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.986, -6.4, -71.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1764.geometry}
        material={materials['mb:o:33:115']}
        position={[-591.973, -20, -103.801]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1765.geometry}
        material={materials['mb:o:33:119']}
        position={[-595.185, -16.8, -71.802]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1766.geometry}
        material={materials['mb:o:33:115']}
        position={[-591.936, -25.6, -59.799]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1767.geometry}
        material={materials['mb:o:33:119']}
        position={[-587.982, -28.8, -191.8]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1768.geometry}
        material={materials['mb:o:33:115']}
        position={[-587.979, -25.6, -183.8]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1769.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.971, -22.4, -183.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part177.geometry}
        material={materials['mb:o:68:5']}
        position={[-448, 137.515, -80]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1770.geometry}
        material={materials['mb:o:33:115']}
        position={[-585.573, -18.4, -159.805]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1771.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.971, -12.8, -159.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1772.geometry}
        material={materials['mb:o:33:119']}
        position={[-587.965, -25.6, -143.8]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1773.geometry}
        material={materials['mb:o:33:115']}
        position={[-587.96, -25.6, -127.8]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1774.geometry}
        material={materials['mb:o:33:119']}
        position={[-583.967, -19.2, -147.799]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1775.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.968, -16, -151.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1776.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.962, -19.2, -135.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1777.geometry}
        material={materials['mb:o:33:119']}
        position={[-583.994, -16, -43.799]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1778.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.943, -19.2, -79.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1779.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.935, -16, -55.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part178.geometry}
        material={materials['mb:o:68:5']}
        position={[-440, 137.515, -80]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1780.geometry}
        material={materials['mb:o:33:119']}
        position={[-580.022, -12.8, -103.808]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1781.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.938, -12.8, -63.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1782.geometry}
        material={materials['mb:o:33:119']}
        position={[-592.002, -20, -19.801]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1783.geometry}
        material={materials['mb:o:33:119']}
        position={[-572.004, -12.8, -15.794]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1784.geometry}
        material={materials['mb:o:33:119']}
        position={[-568.005, -9.6, -11.793]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1785.geometry}
        material={materials['mb:o:33:119']}
        position={[-580.002, -6.4, -19.797]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1786.geometry}
        material={materials['mb:o:33:119']}
        position={[-543.956, -16, -147.815]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1787.geometry}
        material={materials['mb:o:33:119']}
        position={[-584.026, -16, -91.81]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1788.geometry}
        material={materials['mb:o:33:115']}
        position={[-500.019, -16, -167.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1789.geometry}
        material={materials['mb:o:33:138']}
        position={[-515.943, -28.8, -191.805]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part179.geometry}
        material={materials['mb:o:68:5']}
        position={[-448, 137.515, -96]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1790.geometry}
        material={materials['mb:o:354:119']}
        position={[-547.942, -19.2, -187.817]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1791.geometry}
        material={materials['mb:o:354:119']}
        position={[-539.976, -19.2, -195.814]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1792.geometry}
        material={materials['mb:o:354:119']}
        position={[-508.025, -23.199, -188.618]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1793.geometry}
        material={materials['mb:o:354:119']}
        position={[-500.015, -6.4, -139.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1794.geometry}
        material={materials['mb:o:354:199']}
        position={[-500.015, -9.6, -155.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1795.geometry}
        material={materials['mb:o:354:119']}
        position={[-508.004, -9.6, -123.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1796.geometry}
        material={materials['mb:o:354:119']}
        position={[-508.812, -2.4, -107.817]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1797.geometry}
        material={materials['mb:o:354:119']}
        position={[-508.831, -2.4, -51.817]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1798.geometry}
        material={materials['mb:o:354:119']}
        position={[-508.004, -9.6, -75.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1799.geometry}
        material={materials['mb:o:354:119']}
        position={[-512.004, -0.8, -75.818]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part180.geometry}
        material={materials['mb:o:68:5']}
        position={[-440, 137.515, -96]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1800.geometry}
        material={materials['mb:o:354:138']}
        position={[-515.978, -9.6, -83.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1801.geometry}
        material={materials['mb:o:354:119']}
        position={[-523.944, -12.8, -83.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1802.geometry}
        material={materials['mb:o:354:330']}
        position={[-515.939, -9.6, -67.825]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1803.geometry}
        material={materials['mb:o:354:119']}
        position={[-507.991, -9.6, -43.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1804.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.965, -9.6, -11.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1805.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.971, -6.4, -27.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1806.geometry}
        material={materials['mb:o:354:199']}
        position={[-499.971, -3.2, -27.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1807.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.99, 0, -83.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1808.geometry}
        material={materials['mb:o:354:115']}
        position={[-499.979, -3.2, -51.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1809.geometry}
        material={materials['mb:o:354:308']}
        position={[-588.005, -25.6, -11.8]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part181.geometry}
        material={materials['mb:o:68:5']}
        position={[-448, 137.515, -64]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1810.geometry}
        material={materials['mb:o:354:119']}
        position={[-588.005, -19.2, -11.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1811.geometry}
        material={materials['mb:o:354:115']}
        position={[-591.994, -20, -43.801]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1812.geometry}
        material={materials['mb:o:354:119']}
        position={[-587.991, -25.6, -51.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1813.geometry}
        material={materials['mb:o:354:115']}
        position={[-595.936, -22.4, -59.797]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1814.geometry}
        material={materials['mb:o:354:115']}
        position={[-591.991, -16.8, -51.801]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1815.geometry}
        material={materials['mb:o:354:199']}
        position={[-587.978, -22.4, -179.8]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1816.geometry}
        material={materials['mb:o:354:115']}
        position={[-588.772, -18.4, -163.806]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1817.geometry}
        material={materials['mb:o:354:115']}
        position={[-591.975, -18.4, -155.807]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1818.geometry}
        material={materials['mb:o:354:119']}
        position={[-587.975, -25.6, -171.8]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1819.geometry}
        material={materials['mb:o:354:119']}
        position={[-579.975, -22.4, -171.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part182.geometry}
        material={materials['mb:o:68:5']}
        position={[-440, 137.515, -64]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1820.geometry}
        material={materials['mb:o:354:119']}
        position={[-579.975, -16, -171.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1821.geometry}
        material={materials['mb:o:354:217']}
        position={[-571.969, -16, -155.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1822.geometry}
        material={materials['mb:o:354:115']}
        position={[-587.961, -22.4, -131.8]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1823.geometry}
        material={materials['mb:o:354:119']}
        position={[-580.018, -9.6, -35.792]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1824.geometry}
        material={materials['mb:o:354:119']}
        position={[-579.94, -12.8, -71.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1825.geometry}
        material={materials['mb:o:354:119']}
        position={[-588.018, -12.8, -35.794]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1826.geometry}
        material={materials['mb:o:354:119']}
        position={[-571.942, -12.8, -75.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1827.geometry}
        material={materials['mb:o:354:217']}
        position={[-563.969, -19.2, -155.808]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1828.geometry}
        material={materials['mb:o:354:115']}
        position={[-587.972, -16, -107.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1829.geometry}
        material={materials['mb:o:354:115']}
        position={[-584.015, -4, -27.79]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part183.geometry}
        material={materials['mb:o:68:5']}
        position={[-448, 137.515, -112]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1830.geometry}
        material={materials['mb:o:354:119']}
        position={[-592, -19.2, -27.801]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1831.geometry}
        material={materials['mb:o:354:119']}
        position={[-588.002, -12.8, -19.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1832.geometry}
        material={materials['mb:o:354:119']}
        position={[-580.005, -12.8, -11.797]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1833.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.998, 3.2, -107.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1834.geometry}
        material={materials['mb:o:274:119']}
        position={[-567.962, -28.8, -135.807]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1835.geometry}
        material={materials['mb:o:274:308']}
        position={[-519.962, -28.8, -135.823]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1836.geometry}
        material={materials['mb:o:400:119']}
        position={[-543.938, -12.8, -63.815]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1837.geometry}
        material={materials['mb:o:400:119']}
        position={[-551.924, -12.8, -23.812]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1838.geometry}
        material={materials['mb:o:400:119']}
        position={[-543.973, -19.2, -167.815]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1839.geometry}
        material={materials['mb:o:400:119']}
        position={[-551.951, -16, -103.812]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part184.geometry}
        material={materials['mb:o:68:5']}
        position={[-440, 137.515, -112]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1840.geometry}
        material={materials['mb:o:356:308']}
        position={[-567.932, -28.8, -47.807]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1841.geometry}
        material={materials['mb:o:356:308']}
        position={[-519.932, -28.8, -47.823]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1842.geometry}
        material={materials['mb:o:38:138']}
        position={[-551.977, -28.8, -191.818]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1843.geometry}
        material={materials['mb:o:369:119']}
        position={[-551.98, -25.6, -183.818]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1844.geometry}
        material={materials['mb:o:223:25']}
        position={[-543.971, -22.4, -159.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1845.geometry}
        material={materials['mb:o:36:119']}
        position={[-587.998, -25.6, -31.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1846.geometry}
        material={materials['mb:o:36:119']}
        position={[-587.973, -25.6, -103.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1847.geometry}
        material={materials['mb:o:64:119']}
        position={[-523.935, -12.8, -55.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1848.geometry}
        material={materials['mb:o:64:119']}
        position={[-563.935, -12.8, -55.808]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1849.geometry}
        material={materials['mb:o:64:119']}
        position={[-531.938, -9.6, -63.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part185.geometry}
        material={materials['mb:o:152:199']}
        position={[-444, -3.285, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1850.geometry}
        material={materials['mb:o:64:119']}
        position={[-555.938, -9.6, -63.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1851.geometry}
        material={materials['mb:o:64:119']}
        position={[-523.927, -12.8, -31.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1852.geometry}
        material={materials['mb:o:64:119']}
        position={[-555.971, -16, -159.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1853.geometry}
        material={materials['mb:o:64:119']}
        position={[-563.973, -19.2, -167.808]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1854.geometry}
        material={materials['mb:o:64:119']}
        position={[-563.962, -16, -135.808]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1855.geometry}
        material={materials['mb:o:64:119']}
        position={[-523.951, -16, -103.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1856.geometry}
        material={materials['mb:o:64:27']}
        position={[-543.944, -16, -83.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1857.geometry}
        material={materials['mb:o:64:119']}
        position={[-555.949, -12.8, -95.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1858.geometry}
        material={materials['mb:o:64:27']}
        position={[-547.962, -16, -135.814]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1859.geometry}
        material={materials['mb:o:64:119']}
        position={[-527.98, -16, -147.812]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part186.geometry}
        material={materials['mb:o:215:199']}
        position={[-444, 83.115, -60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1860.geometry}
        material={materials['mb:o:64:119']}
        position={[-547.976, -16, -175.814]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1861.geometry}
        material={materials['mb:o:64:119']}
        position={[-535.98, -19.2, -187.818]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1862.geometry}
        material={materials['mb:o:64:119']}
        position={[-531.974, -22.4, -199.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1863.geometry}
        material={materials['mb:o:64:119']}
        position={[-575.978, -25.6, -211.796]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1864.geometry}
        material={materials['mb:o:64:119']}
        position={[-527.972, -16, -123.812]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1865.geometry}
        material={materials['mb:o:64:119']}
        position={[-507.976, -12.8, -135.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1866.geometry}
        material={materials['mb:o:64:119']}
        position={[-508, -9.6, -111.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1867.geometry}
        material={materials['mb:o:64:119']}
        position={[-507.98, -9.6, -55.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1868.geometry}
        material={materials['mb:o:64:119']}
        position={[-507.927, -9.6, -31.828]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1869.geometry}
        material={materials['mb:o:64:119']}
        position={[-587.971, -25.6, -159.8]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part187.geometry}
        material={materials['mb:o:215:199']}
        position={[-416, 83.115, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1870.geometry}
        material={materials['mb:o:64:119']}
        position={[-579.935, -12.8, -55.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1871.geometry}
        material={materials['mb:o:104:119']}
        position={[-523.942, -16, -75.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1872.geometry}
        material={materials['mb:o:104:119']}
        position={[-500.012, -6.4, -147.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1873.geometry}
        material={materials['mb:o:104:119']}
        position={[-508.015, -9.6, -155.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1874.geometry}
        material={materials['mb:o:104:119']}
        position={[-515.982, -9.6, -59.814]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1875.geometry}
        material={materials['mb:o:104:119']}
        position={[-515.98, -9.6, -75.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1876.geometry}
        material={materials['mb:o:104:119']}
        position={[-515.972, -12.8, -99.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1877.geometry}
        material={materials['mb:o:104:119']}
        position={[-499.993, 0, -91.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1878.geometry}
        material={materials['mb:o:104:115']}
        position={[-499.976, 0, -43.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1879.geometry}
        material={materials['mb:o:104:119']}
        position={[-595.18, -16.8, -83.802]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part188.geometry}
        material={materials['mb:o:215:199']}
        position={[-472, 83.115, -88]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1880.geometry}
        material={materials['mb:o:104:119']}
        position={[-595.183, -24.8, -75.802]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1881.geometry}
        material={materials['mb:o:104:115']}
        position={[-579.978, -16, -163.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1882.geometry}
        material={materials['mb:o:104:119']}
        position={[-587.983, -12.8, -75.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1883.geometry}
        material={materials['mb:o:104:119']}
        position={[-579.98, -16, -83.797]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1884.geometry}
        material={materials['mb:o:104:119']}
        position={[-571.997, -12.8, -27.825]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1885.geometry}
        material={materials['mb:o:104:115']}
        position={[-588, -12.8, -27.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1886.geometry}
        material={materials['mb:o:9639:119']}
        position={[-543.969, -28.8, -215.815]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1887.geometry}
        material={materials['mb:o:203:119']}
        position={[-515.929, -12.8, -39.825]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1888.geometry}
        material={materials['mb:o:203:308']}
        position={[-499.975, -12.8, -39.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1889.geometry}
        material={materials['mb:o:203:119']}
        position={[-571.951, -16, -103.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part189.geometry}
        material={materials['mb:o:2187:192']}
        position={[-562.694, 147.374, -4.877]}
        rotation={[Math.PI / 2, 0, -2.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1890.geometry}
        material={materials['mb:o:203:119']}
        position={[-515.951, -16, -103.825]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1891.geometry}
        material={materials['mb:o:203:25']}
        position={[-543.964, -25.6, -139.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1892.geometry}
        material={materials['mb:o:203:25']}
        position={[-543.961, -25.6, -131.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1893.geometry}
        material={materials['mb:o:203:25']}
        position={[-543.961, -22.4, -131.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1894.geometry}
        material={materials['mb:o:203:25']}
        position={[-543.942, -22.4, -75.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1895.geometry}
        material={materials['mb:o:203:25']}
        position={[-543.942, -25.6, -75.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1896.geometry}
        material={materials['mb:o:203:119']}
        position={[-507.989, -12.8, -79.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1897.geometry}
        material={materials['mb:o:203:119']}
        position={[-499.978, -9.6, -47.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1898.geometry}
        material={materials['mb:o:203:308']}
        position={[-579.951, -25.6, -103.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1899.geometry}
        material={materials['mb:o:2:119']}
        position={[-547.972, -12.8, -99.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part190.geometry}
        material={materials['mb:o:2187:192']}
        position={[-554.906, 147.374, 3.33]}
        rotation={[Math.PI / 2, 0, 0.829]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1900.geometry}
        material={materials['mb:o:2:138']}
        position={[-515.939, -25.6, -179.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1901.geometry}
        material={materials['mb:o:2:138']}
        position={[-507.994, -12.8, -35.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1902.geometry}
        material={materials['mb:o:2:119']}
        position={[-500.007, -12.8, -131.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1903.geometry}
        material={materials['mb:o:2:119']}
        position={[-500.012, -16, -147.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1904.geometry}
        material={materials['mb:o:2:119']}
        position={[-508.023, -19.2, -179.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1905.geometry}
        material={materials['mb:o:2:330']}
        position={[-508.012, -16, -147.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1906.geometry}
        material={materials['mb:o:2:119']}
        position={[-500.015, -12.8, -155.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1907.geometry}
        material={materials['mb:o:2:119']}
        position={[-499.993, -6.4, -91.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1908.geometry}
        material={materials['mb:o:2:119']}
        position={[-499.985, 3.2, -67.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1909.geometry}
        material={materials['mb:o:2:119']}
        position={[-587.983, -25.6, -75.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part191.geometry}
        material={materials['mb:o:1001:28']}
        position={[-598.29, 57.728, 12.433]}
        rotation={[1.583, -0.428, -2.405]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1910.geometry}
        material={materials['mb:o:2:119']}
        position={[-579.967, -25.6, -147.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1911.geometry}
        material={materials['mb:o:2:115']}
        position={[-579.964, -22.4, -139.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1912.geometry}
        material={materials['mb:o:2:119']}
        position={[-580.02, -16, -107.792]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1913.geometry}
        material={materials['mb:o:2:119']}
        position={[-571.991, -12.8, -43.825]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1914.geometry}
        material={materials['mb:o:2:115']}
        position={[-508.02, -16, -171.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1915.geometry}
        material={materials['mb:o:37:119']}
        position={[-499.994, -12.8, -95.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1916.geometry}
        material={materials['mb:o:37:119']}
        position={[-571.971, -19.2, -159.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1917.geometry}
        material={materials['mb:o:37:119']}
        position={[-543.973, -28.8, -203.815]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1918.geometry}
        material={materials['mb:o:37:115']}
        position={[-515.971, -19.2, -159.825]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1919.geometry}
        material={materials['mb:o:37:119']}
        position={[-499.997, -9.6, -103.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part192.geometry}
        material={materials['mb:o:1001:28']}
        position={[-566.772, 37.125, -48.191]}
        rotation={[1.878, 0.008, -0.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1920.geometry}
        material={materials['mb:o:37:119']}
        position={[-500.025, -3.2, -111.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1921.geometry}
        material={materials['mb:o:37:308']}
        position={[-579.949, -22.4, -95.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1922.geometry}
        material={materials['mb:o:210:119']}
        position={[-551.942, -16, -75.812]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1923.geometry}
        material={materials['mb:o:210:115']}
        position={[-500.025, 0, -111.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1924.geometry}
        material={materials['mb:o:210:119']}
        position={[-499.986, -3.2, -71.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1925.geometry}
        material={materials['mb:o:210:119']}
        position={[-499.983, 0, -63.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1926.geometry}
        material={materials['mb:o:210:119']}
        position={[-579.976, -19.2, -167.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1927.geometry}
        material={materials['mb:o:210:119']}
        position={[-580.022, -19.2, -103.792]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1928.geometry}
        material={materials['mb:o:210:119']}
        position={[-580.019, -12.8, -31.792]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1929.geometry}
        material={materials['mb:o:30:119']}
        position={[-519.975, -12.8, -91.807]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part193.geometry}
        material={materials['mb:o:1001:28']}
        position={[-540.704, 32.505, -43.525]}
        rotation={[1.878, 0.008, 0.81]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1930.geometry}
        material={materials['mb:o:30:119']}
        position={[-579.94, -16, -71.803]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1931.geometry}
        material={materials['mb:o:30:119']}
        position={[-576.002, -9.6, -19.796]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1932.geometry}
        material={materials['mb:o:103:308']}
        position={[-503.958, -16, -31.818]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1933.geometry}
        material={materials['mb:o:103:119']}
        position={[-543.967, -19.2, -143.815]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1934.geometry}
        material={materials['mb:o:103:119']}
        position={[-575.969, -25.6, -183.796]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1935.geometry}
        material={materials['mb:o:103:308']}
        position={[-504.016, -25.6, -159.818]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1936.geometry}
        material={materials['mb:o:149:308']}
        position={[-503.98, -16, -95.818]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1937.geometry}
        material={materials['mb:o:3:119']}
        position={[-555.942, -9.6, -75.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1938.geometry}
        material={materials['mb:o:3:119']}
        position={[-555.925, -9.6, -27.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1939.geometry}
        material={materials['mb:o:3:119']}
        position={[-547.92, -9.6, -11.814]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part194.geometry}
        material={materials['mb:o:1001:28']}
        position={[-554.109, 83.188, -27.097]}
        rotation={[1.973, 0.01, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1940.geometry}
        material={materials['mb:o:3:330']}
        position={[-547.931, -9.6, -43.814]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1941.geometry}
        material={materials['mb:o:3:27']}
        position={[-539.925, -9.6, -27.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1942.geometry}
        material={materials['mb:o:3:330']}
        position={[-539.942, -9.6, -75.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1943.geometry}
        material={materials['mb:o:3:119']}
        position={[-523.939, -12.8, -67.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1944.geometry}
        material={materials['mb:o:3:119']}
        position={[-571.936, -9.6, -59.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1945.geometry}
        material={materials['mb:o:3:25']}
        position={[-539.978, -16, -179.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1946.geometry}
        material={materials['mb:o:3:330']}
        position={[-571.978, -16, -179.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1947.geometry}
        material={materials['mb:o:3:330']}
        position={[-555.967, -12.8, -147.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1948.geometry}
        material={materials['mb:o:3:27']}
        position={[-523.978, -19.2, -179.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1949.geometry}
        material={materials['mb:o:3:27']}
        position={[-555.953, -12.8, -107.811]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part195.geometry}
        material={materials['mb:o:1001:28']}
        position={[-563.486, 83.57, 25.36]}
        rotation={[1.141, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1950.geometry}
        material={materials['mb:o:3:119']}
        position={[-539.958, -12.8, -123.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1951.geometry}
        material={materials['mb:o:3:25']}
        position={[-523.956, -16, -115.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1952.geometry}
        material={materials['mb:o:3:27']}
        position={[-531.947, -16, -91.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1953.geometry}
        material={materials['mb:o:3:27']}
        position={[-563.958, -16, -123.808]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1954.geometry}
        material={materials['mb:o:3:27']}
        position={[-523.969, -19.2, -155.822]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1955.geometry}
        material={materials['mb:o:3:330']}
        position={[-547.983, -19.2, -195.814]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1956.geometry}
        material={materials['mb:o:3:119']}
        position={[-515.969, -16, -155.825]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1957.geometry}
        material={materials['mb:o:3:119']}
        position={[-519.975, -9.6, -91.807]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1958.geometry}
        material={materials['mb:o:3:119']}
        position={[-499.965, -3.2, -11.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1959.geometry}
        material={materials['mb:o:3:199']}
        position={[-507.99, 0, -83.817]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part196.geometry}
        material={materials['mb:o:1001:141']}
        position={[-514.696, 35.817, 12.545]}
        rotation={[1.558, 0.467, 2.131]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1960.geometry}
        material={materials['mb:o:3:115']}
        position={[-515.983, -25.6, -195.825]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1961.geometry}
        material={materials['mb:o:3:119']}
        position={[-591.969, -20, -115.801]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1962.geometry}
        material={materials['mb:o:3:119']}
        position={[-580.005, -9.6, -11.797]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1963.geometry}
        material={materials['mb:o:3:119']}
        position={[-531.958, -16, -139.811]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1964.geometry}
        material={materials['mb:o:544:25']}
        position={[-543.929, -16, -39.815]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1965.geometry}
        material={materials['mb:o:544:25']}
        position={[-543.952, -19.2, -103.815]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1966.geometry}
        material={materials['mb:o:164:308']}
        position={[-551.967, -25.6, -15.815]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1967.geometry}
        material={materials['mb:o:655:115']}
        position={[-580.015, -9.6, -27.792]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1968.geometry}
        material={materials['mb:o:357:115']}
        position={[-500.015, -3.2, -139.817]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1969.geometry}
        material={materials['mb:o:357:119']}
        position={[-499.996, 3.2, -99.819]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part197.geometry}
        material={materials['mb:o:1001:28']}
        position={[-516.828, 37.974, -14.166]}
        rotation={[1.558, 0.467, 0.952]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1970.geometry}
        material={materials['mb:o:357:119']}
        position={[-595.191, -16.8, -51.802]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1971.geometry}
        material={materials['mb:o:357:199']}
        position={[-580.02, -9.6, -43.792]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1972.geometry}
        material={materials['mb:o:357:115']}
        position={[-587.98, -12.8, -83.797]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1973.geometry}
        material={materials['mb:o:81:141']}
        position={[-555.933, -9.6, -51.811]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1974.geometry}
        material={materials['mb:o:81:141']}
        position={[-539.931, -9.6, -59.806]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1975.geometry}
        material={materials['mb:o:81:141']}
        position={[-531.931, -12.8, -27.808]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1976.geometry}
        material={materials['mb:o:81:330']}
        position={[-539.936, -12.8, -43.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1977.geometry}
        material={materials['mb:o:81:141']}
        position={[-555.969, -12.8, -139.8]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1978.geometry}
        material={materials['mb:o:81:141']}
        position={[-531.95, -16, -99.819]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1979.geometry}
        material={materials['mb:o:81:330']}
        position={[-555.944, -12.8, -83.811]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part198.geometry}
        material={materials['mb:o:1001:28']}
        position={[-571.232, 33.792, 46.186]}
        rotation={[1.264, -0.008, -2.631]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1980.geometry}
        material={materials['mb:o:81:141']}
        position={[-539.956, -12.8, -99.806]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1981.geometry}
        material={materials['mb:o:81:141']}
        position={[-547.972, -16, -163.814]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1982.geometry}
        material={materials['mb:o:81:141']}
        position={[-547.986, -22.4, -203.814]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1983.geometry}
        material={materials['mb:o:81:119']}
        position={[-508.025, -23.199, -191.818]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1984.geometry}
        material={materials['mb:o:81:119']}
        position={[-507.961, -12.8, -163.833]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1985.geometry}
        material={materials['mb:o:81:199']}
        position={[-508.001, -3.2, -123.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1986.geometry}
        material={materials['mb:o:81:115']}
        position={[-508.809, -2.4, -115.817]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1987.geometry}
        material={materials['mb:o:81:119']}
        position={[-508.829, -2.4, -59.817]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1988.geometry}
        material={materials['mb:o:81:115']}
        position={[-516.015, -6.4, -83.819]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1989.geometry}
        material={materials['mb:o:81:119']}
        position={[-503.994, -0.8, -35.801]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part199.geometry}
        material={materials['mb:o:1001:28']}
        position={[-544.601, 36.003, 43.269]}
        rotation={[1.264, -0.008, 2.473]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1990.geometry}
        material={materials['mb:o:81:115']}
        position={[-499.983, -3.2, -19.797]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1991.geometry}
        material={materials['mb:o:81:119']}
        position={[-515.992, -22.4, -187.803]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1992.geometry}
        material={materials['mb:o:81:119']}
        position={[-515.956, -12.8, -147.806]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1993.geometry}
        material={materials['mb:o:81:119']}
        position={[-591.997, -20, -35.801]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1994.geometry}
        material={materials['mb:o:81:119']}
        position={[-588.005, -16, -11.8]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1995.geometry}
        material={materials['mb:o:81:119']}
        position={[-591.978, -20, -91.801]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1996.geometry}
        material={materials['mb:o:81:115']}
        position={[-595.186, -24.8, -67.802]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1997.geometry}
        material={materials['mb:o:81:119']}
        position={[-595.936, -19.2, -59.797]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1998.geometry}
        material={materials['mb:o:81:119']}
        position={[-587.969, -22.4, -171.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1999.geometry}
        material={materials['mb:o:81:119']}
        position={[-571.967, -16, -147.806]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part200.geometry}
        material={materials['mb:o:1001:28']}
        position={[-604.221, 33.257, 11.377]}
        rotation={[1.579, -0.307, -2.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2000.geometry}
        material={materials['mb:o:81:199']}
        position={[-587.961, -22.4, -123.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2001.geometry}
        material={materials['mb:o:81:119']}
        position={[-587.994, -12.8, -43.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2002.geometry}
        material={materials['mb:o:81:119']}
        position={[-571.95, -12.8, -99.806]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2003.geometry}
        material={materials['mb:o:81:119']}
        position={[-587.975, -16, -99.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2004.geometry}
        material={materials['mb:o:81:119']}
        position={[-576.015, -4, -27.793]}
        rotation={[-Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2005.geometry}
        material={materials['mb:o:81:115']}
        position={[-579.997, -6.4, -35.797]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2006.geometry}
        material={materials['mb:o:163:119']}
        position={[-507.996, -9.6, -99.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2007.geometry}
        material={materials['mb:o:163:119']}
        position={[-507.998, -9.6, -91.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2008.geometry}
        material={materials['mb:o:163:115']}
        position={[-508.004, -6.4, -75.817]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2009.geometry}
        material={materials['mb:o:163:115']}
        position={[-499.994, -6.4, -35.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part201.geometry}
        material={materials['mb:o:1001:141']}
        position={[-604.477, 30.203, -15.329]}
        rotation={[1.579, -0.307, -0.953]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2010.geometry}
        material={materials['mb:o:163:119']}
        position={[-587.991, -22.4, -51.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2011.geometry}
        material={materials['mb:o:163:199']}
        position={[-587.986, -22.4, -67.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2012.geometry}
        material={materials['mb:o:163:119']}
        position={[-587.983, -22.4, -75.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2013.geometry}
        material={materials['mb:o:163:119']}
        position={[-587.98, -22.4, -83.8]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2014.geometry}
        material={materials['mb:o:802:119']}
        position={[-500.002, -9.6, -135.814]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2015.geometry}
        material={materials['mb:o:802:119']}
        position={[-500.011, -6.4, -111.814]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2016.geometry}
        material={materials['mb:o:802:115']}
        position={[-500.03, -6.4, -55.814]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2017.geometry}
        material={materials['mb:o:802:115']}
        position={[-579.973, -22.4, -159.803]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2018.geometry}
        material={materials['mb:o:824:119']}
        position={[-504.023, -22.4, -179.818]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2019.geometry}
        material={materials['mb:o:1294:119']}
        position={[-383.85, 3.2, 72.101]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part202.geometry}
        material={materials['mb:o:1001:28']}
        position={[-524.483, 54.881, -17.893]}
        rotation={[1.559, 0.412, 0.438]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2020.geometry}
        material={materials['mb:o:1294:119']}
        position={[-303.811, -12.8, 88.106]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2021.geometry}
        material={materials['mb:o:2907:199']}
        position={[-375.829, -6.4, 116.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2022.geometry}
        material={materials['mb:o:2907:119']}
        position={[-375.81, 0, 60.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2023.geometry}
        material={materials['mb:o:2907:119']}
        position={[-295.828, -22.4, 4.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2024.geometry}
        material={materials['mb:o:2907:119']}
        position={[-303.828, -16, 4.095]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2025.geometry}
        material={materials['mb:o:2907:119']}
        position={[-295.867, -22.4, 140.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2026.geometry}
        material={materials['mb:o:2907:115']}
        position={[-295.058, -18.4, 148.104]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2027.geometry}
        material={materials['mb:o:2907:119']}
        position={[-379.923, 6.4, 276.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2028.geometry}
        material={materials['mb:o:1642:119']}
        position={[-303.858, -28.8, 196.092]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2029.geometry}
        material={materials['mb:o:217:119']}
        position={[-339.859, -22.4, 192.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part203.geometry}
        material={materials['mb:o:1001:28']}
        position={[-524.804, 51.754, 26.342]}
        rotation={[1.559, 0.412, 2.782]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2030.geometry}
        material={materials['mb:o:3678:119']}
        position={[-295.831, -9.6, 12.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2031.geometry}
        material={materials['mb:o:3678:119']}
        position={[-379.926, 19.2, 284.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2032.geometry}
        material={materials['mb:o:150:308']}
        position={[-371.867, -25.6, 8.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2033.geometry}
        material={materials['mb:o:150:308']}
        position={[-339.867, -25.6, 48.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2034.geometry}
        material={materials['mb:o:150:308']}
        position={[-379.831, -25.6, 112.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2035.geometry}
        material={materials['mb:o:63:119']}
        position={[-375.843, -9.6, 76.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2036.geometry}
        material={materials['mb:o:63:119']}
        position={[-375.849, -9.6, 60.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2037.geometry}
        material={materials['mb:o:63:119']}
        position={[-295.897, -22.4, 52.098]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2038.geometry}
        material={materials['mb:o:63:115']}
        position={[-303.875, -22.4, 116.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2039.geometry}
        material={materials['mb:o:63:119']}
        position={[-379.992, 6.4, 324.069]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part204.geometry}
        material={materials['mb:o:1001:28']}
        position={[-564.048, 55.858, 46.831]}
        rotation={[1.122, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2040.geometry}
        material={materials['mb:o:332:308']}
        position={[-379.85, -25.6, 56.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2041.geometry}
        material={materials['mb:o:358:308']}
        position={[-303.904, -25.6, 32.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2042.geometry}
        material={materials['mb:o:67:119']}
        position={[-355.865, -25.6, 176.124]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2043.geometry}
        material={materials['mb:o:67:308']}
        position={[-379.82, -22.4, 144.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2044.geometry}
        material={materials['mb:o:67:308']}
        position={[-379.82, -19.2, 144.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2045.geometry}
        material={materials['mb:o:281:119']}
        position={[-303.865, -28.8, 208.126]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2046.geometry}
        material={materials['mb:o:281:119']}
        position={[-323.866, -28.8, 212.119]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2047.geometry}
        material={materials['mb:o:281:119']}
        position={[-291.85, -20.8, 68.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2048.geometry}
        material={materials['mb:o:281:119']}
        position={[-299.834, -16, 20.097]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2049.geometry}
        material={materials['mb:o:281:119']}
        position={[-383.929, 12.8, 292.067]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part205.geometry}
        material={materials['mb:o:1001:141']}
        position={[-553.543, 55.164, -48.72]}
        rotation={[2, 0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2050.geometry}
        material={materials['mb:o:281:119']}
        position={[-375.945, 8, 340.07]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2051.geometry}
        material={materials['mb:o:45:119']}
        position={[-323.859, -22.4, 192.119]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2052.geometry}
        material={materials['mb:o:33:27']}
        position={[-331.903, -12.8, 36.11]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2053.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.894, -9.6, 60.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2054.geometry}
        material={materials['mb:o:33:119']}
        position={[-335.89, -9.6, 48.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2055.geometry}
        material={materials['mb:o:33:119']}
        position={[-335.882, -9.6, 24.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2056.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.878, -9.6, 12.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2057.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.879, -12.8, 8.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2058.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.887, -9.6, 40.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2059.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.904, -12.8, 32.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part206.geometry}
        material={materials['mb:o:1001:141']}
        position={[-563.342, 168.974, -5.199]}
        rotation={[0, 1.11, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2060.geometry}
        material={materials['mb:o:33:119']}
        position={[-343.885, -16, 160.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2061.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.885, -16, 160.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2062.geometry}
        material={materials['mb:o:33:119']}
        position={[-323.867, -16, 140.108]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2063.geometry}
        material={materials['mb:o:33:119']}
        position={[-359.871, -16, 152.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2064.geometry}
        material={materials['mb:o:33:119']}
        position={[-327.874, -16, 120.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2065.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.879, -16, 104.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2066.geometry}
        material={materials['mb:o:33:119']}
        position={[-323.889, -16, 76.108]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2067.geometry}
        material={materials['mb:o:33:119']}
        position={[-343.865, -12.8, 104.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2068.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.865, -12.8, 104.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2069.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.865, -12.8, 104.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part207.geometry}
        material={materials['mb:o:1001:141']}
        position={[-554.417, 168.974, 3.864]}
        rotation={[Math.PI, -0.742, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2070.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.857, -12.8, 80.123]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2071.geometry}
        material={materials['mb:o:33:25']}
        position={[-323.892, -22.4, 180.119]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2072.geometry}
        material={materials['mb:o:33:138']}
        position={[-339.892, -22.4, 180.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2073.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.875, -16, 116.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2074.geometry}
        material={materials['mb:o:33:119']}
        position={[-355.872, -16, 124.108]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2075.geometry}
        material={materials['mb:o:33:119']}
        position={[-343.874, -16, 128.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2076.geometry}
        material={materials['mb:o:33:119']}
        position={[-359.874, -19.2, 160.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2077.geometry}
        material={materials['mb:o:33:119']}
        position={[-319.89, -19.2, 176.12]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2078.geometry}
        material={materials['mb:o:33:119']}
        position={[-355.892, -22.4, 180.108]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2079.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.862, -22.4, 184.095]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part208.geometry}
        material={materials['mb:o:1001:28']}
        position={[-518.1, 74.181, 4.294]}
        rotation={[1.559, 0.428, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2080.geometry}
        material={materials['mb:o:33:119']}
        position={[-355.855, -28.8, 204.11]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2081.geometry}
        material={materials['mb:o:33:27']}
        position={[-351.856, -25.6, 200.109]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2082.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.879, -9.6, 16.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2083.geometry}
        material={materials['mb:o:33:138']}
        position={[-375.876, -12.8, 8.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2084.geometry}
        material={materials['mb:o:33:330']}
        position={[-367.885, -16, 160.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2085.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.876, -16, 136.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2086.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.811, -19.2, 168.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2087.geometry}
        material={materials['mb:o:33:115']}
        position={[-379.808, -23.2, 177.716]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2088.geometry}
        material={materials['mb:o:33:308']}
        position={[-379.813, -22.4, 164.116]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2089.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.814, -16, 160.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part209.geometry}
        material={materials['mb:o:1001:28']}
        position={[-554.109, 63.988, -27.097]}
        rotation={[1.973, 0.01, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2090.geometry}
        material={materials['mb:o:33:119']}
        position={[-375.82, -12.8, 144.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2091.geometry}
        material={materials['mb:o:33:119']}
        position={[-375.831, -12.8, 112.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2092.geometry}
        material={materials['mb:o:33:119']}
        position={[-378.231, -5.6, 128.114]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2093.geometry}
        material={materials['mb:o:33:119']}
        position={[-375.031, -5.6, 128.115]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2094.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.814, -6.4, 120.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2095.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.821, -9.6, 140.116]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2096.geometry}
        material={materials['mb:o:33:119']}
        position={[-371.836, -4, 88.116]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2097.geometry}
        material={materials['mb:o:33:115']}
        position={[-375.836, 0, 88.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2098.geometry}
        material={materials['mb:o:33:119']}
        position={[-378.223, -2.4, 104.114]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2099.geometry}
        material={materials['mb:o:33:115']}
        position={[-378.203, -2.4, 48.114]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part210.geometry}
        material={materials['mb:o:1001:28']}
        position={[-599.717, 73.725, -5.846]}
        rotation={[1.582, -0.412, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2100.geometry}
        material={materials['mb:o:33:138']}
        position={[-367.854, -12.8, 72.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2101.geometry}
        material={materials['mb:o:33:138']}
        position={[-351.89, -16, 72.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2102.geometry}
        material={materials['mb:o:33:138']}
        position={[-359.887, -16, 80.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2103.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.842, -6.4, 36.099]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2104.geometry}
        material={materials['mb:o:33:119']}
        position={[-375.885, -9.6, 8.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2105.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.842, -3.2, 36.099]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2106.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.852, -6.4, 8.095]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2107.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.847, -6.4, 64.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2108.geometry}
        material={materials['mb:o:33:115']}
        position={[-291.86, -20, 96.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2109.geometry}
        material={materials['mb:o:33:119']}
        position={[-288.649, -16.8, 64.1]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part211.geometry}
        material={materials['mb:o:1001:141']}
        position={[-563.486, 64.37, 25.36]}
        rotation={[1.141, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2110.geometry}
        material={materials['mb:o:33:115']}
        position={[-291.897, -25.6, 52.097]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2111.geometry}
        material={materials['mb:o:33:119']}
        position={[-295.852, -28.8, 184.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2112.geometry}
        material={materials['mb:o:33:115']}
        position={[-295.854, -25.6, 176.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2113.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.863, -22.4, 176.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2114.geometry}
        material={materials['mb:o:33:115']}
        position={[-298.26, -18.4, 152.103]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2115.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.863, -12.8, 152.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2116.geometry}
        material={materials['mb:o:33:119']}
        position={[-295.868, -25.6, 136.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2117.geometry}
        material={materials['mb:o:33:115']}
        position={[-295.874, -25.6, 120.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2118.geometry}
        material={materials['mb:o:33:119']}
        position={[-299.867, -19.2, 140.097]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2119.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.865, -16, 144.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part212.geometry}
        material={materials['mb:o:1001:141']}
        position={[-592.926, 52.247, -27.755]}
        rotation={[1.583, -0.428, -0.374]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2120.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.871, -19.2, 128.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2121.geometry}
        material={materials['mb:o:33:119']}
        position={[-299.839, -16, 36.097]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2122.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.89, -19.2, 72.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2123.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.898, -16, 48.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2124.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.811, -12.8, 96.106]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2125.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.896, -12.8, 56.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2126.geometry}
        material={materials['mb:o:33:119']}
        position={[-291.831, -20, 12.099]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2127.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.829, -12.8, 8.092]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2128.geometry}
        material={materials['mb:o:33:119']}
        position={[-315.828, -9.6, 4.091]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2129.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.831, -6.4, 12.095]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part213.geometry}
        material={materials['mb:o:579:141']}
        position={[-563.305, 141.071, 18.445]}
        rotation={[0.786, -0.019, -1.552]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2130.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.878, -16, 140.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2131.geometry}
        material={materials['mb:o:33:119']}
        position={[-299.807, -16, 84.108]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2132.geometry}
        material={materials['mb:o:33:115']}
        position={[-383.814, -16, 160.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2133.geometry}
        material={materials['mb:o:33:138']}
        position={[-367.89, -28.8, 184.103]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2134.geometry}
        material={materials['mb:o:33:119']}
        position={[-375.926, 8.8, 284.07]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2135.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.934, 12.8, 308.067]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2136.geometry}
        material={materials['mb:o:33:115']}
        position={[-375.992, 3.2, 324.067]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2137.geometry}
        material={materials['mb:o:33:119']}
        position={[-372.744, 12, 336.071]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2138.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.903, 12.8, 356.078]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2139.geometry}
        material={materials['mb:o:33:115']}
        position={[-375.955, 8.8, 368.07]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part214.geometry}
        material={materials['mb:o:579:141']}
        position={[-563.038, 139.94, 8.266]}
        rotation={[0.786, -0.019, 1.531]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2140.geometry}
        material={materials['mb:o:354:119']}
        position={[-335.892, -19.2, 180.115]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2141.geometry}
        material={materials['mb:o:354:119']}
        position={[-343.858, -19.2, 188.112]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2142.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.808, -23.199, 180.916]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2143.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.818, -6.4, 132.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2144.geometry}
        material={materials['mb:o:354:199']}
        position={[-383.818, -9.6, 148.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2145.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.829, -9.6, 116.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2146.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.021, -2.4, 100.115]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2147.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.002, -2.4, 44.115]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2148.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.829, -9.6, 68.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2149.geometry}
        material={materials['mb:o:354:119']}
        position={[-371.829, -0.8, 68.116]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part215.geometry}
        material={materials['mb:o:579:141']}
        position={[-554.562, 139.94, -9.813]}
        rotation={[2.356, 0.019, -1.875]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2150.geometry}
        material={materials['mb:o:354:138']}
        position={[-367.856, -9.6, 76.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2151.geometry}
        material={materials['mb:o:354:119']}
        position={[-359.889, -12.8, 76.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2152.geometry}
        material={materials['mb:o:354:119']}
        position={[-367.894, -9.6, 60.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2153.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.842, -9.6, 36.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2154.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.868, -9.6, 4.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2155.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.863, -6.4, 20.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2156.geometry}
        material={materials['mb:o:354:199']}
        position={[-383.863, -3.2, 20.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2157.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.843, 0, 76.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2158.geometry}
        material={materials['mb:o:354:115']}
        position={[-383.854, -3.2, 44.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2159.geometry}
        material={materials['mb:o:354:308']}
        position={[-295.828, -25.6, 4.098]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part216.geometry}
        material={materials['mb:o:579:141']}
        position={[-554.295, 141.071, -19.992]}
        rotation={[2.356, 0.019, 1.589]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2160.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.828, -19.2, 4.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2161.geometry}
        material={materials['mb:o:354:115']}
        position={[-291.839, -20, 36.099]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2162.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.842, -25.6, 44.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2163.geometry}
        material={materials['mb:o:354:115']}
        position={[-287.897, -22.4, 52.095]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2164.geometry}
        material={materials['mb:o:354:115']}
        position={[-291.842, -16.8, 44.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2165.geometry}
        material={materials['mb:o:354:199']}
        position={[-295.856, -22.4, 172.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2166.geometry}
        material={materials['mb:o:354:115']}
        position={[-295.061, -18.4, 156.104]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2167.geometry}
        material={materials['mb:o:354:115']}
        position={[-291.858, -18.4, 148.105]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2168.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.858, -25.6, 164.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2169.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.858, -22.4, 164.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part217.geometry}
        material={materials['mb:o:579:141']}
        position={[-585.292, 105.673, 2.534]}
        rotation={[1.582, -0.409, 2.385]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2170.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.858, -16, 164.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2171.geometry}
        material={materials['mb:o:354:217']}
        position={[-311.864, -16, 148.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2172.geometry}
        material={materials['mb:o:354:115']}
        position={[-295.872, -22.4, 124.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2173.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.816, -9.6, 28.09]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2174.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.893, -12.8, 64.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2175.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.816, -12.8, 28.092]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2176.geometry}
        material={materials['mb:o:354:119']}
        position={[-311.892, -12.8, 68.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2177.geometry}
        material={materials['mb:o:354:217']}
        position={[-319.864, -19.2, 148.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2178.geometry}
        material={materials['mb:o:354:115']}
        position={[-295.861, -16, 100.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2179.geometry}
        material={materials['mb:o:354:115']}
        position={[-299.818, -4, 20.088]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part218.geometry}
        material={materials['mb:o:579:141']}
        position={[-577.953, 102.494, 2.726]}
        rotation={[1.582, -0.409, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2180.geometry}
        material={materials['mb:o:354:119']}
        position={[-291.834, -19.2, 20.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2181.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.831, -12.8, 12.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2182.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.828, -12.8, 4.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2183.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.835, 3.2, 100.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2184.geometry}
        material={materials['mb:o:354:119']}
        position={[-379.923, 9.6, 276.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2185.geometry}
        material={materials['mb:o:354:119']}
        position={[-379.926, 16, 284.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2186.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.929, 9.6, 292.07]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2187.geometry}
        material={materials['mb:o:354:119']}
        position={[-379.911, 16, 300.063]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2188.geometry}
        material={materials['mb:o:354:115']}
        position={[-375.934, 8.8, 308.07]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2189.geometry}
        material={materials['mb:o:354:115']}
        position={[-375.937, 12, 316.07]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part219.geometry}
        material={materials['mb:o:579:141']}
        position={[-582.749, 111.546, 2.601]}
        rotation={[1.582, -0.409, 0.814]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2190.geometry}
        material={materials['mb:o:354:115']}
        position={[-371.992, 6.4, 324.066]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2191.geometry}
        material={materials['mb:o:354:115']}
        position={[-379.956, 12.8, 372.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2192.geometry}
        material={materials['mb:o:274:119']}
        position={[-315.871, -28.8, 128.105]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2193.geometry}
        material={materials['mb:o:274:308']}
        position={[-363.871, -28.8, 128.121]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2194.geometry}
        material={materials['mb:o:400:119']}
        position={[-339.896, -12.8, 56.113]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2195.geometry}
        material={materials['mb:o:400:119']}
        position={[-331.91, -12.8, 16.11]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2196.geometry}
        material={materials['mb:o:400:119']}
        position={[-339.86, -19.2, 160.113]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2197.geometry}
        material={materials['mb:o:400:119']}
        position={[-331.882, -16, 96.11]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2198.geometry}
        material={materials['mb:o:356:308']}
        position={[-315.901, -28.8, 40.105]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2199.geometry}
        material={materials['mb:o:356:308']}
        position={[-363.901, -28.8, 40.121]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part220.geometry}
        material={materials['mb:o:579:141']}
        position={[-555.484, 103.113, 25.388]}
        rotation={[1.117, -0.011, 0.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2200.geometry}
        material={materials['mb:o:38:138']}
        position={[-331.856, -28.8, 184.116]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2201.geometry}
        material={materials['mb:o:369:119']}
        position={[-331.854, -25.6, 176.116]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2202.geometry}
        material={materials['mb:o:223:25']}
        position={[-339.862, -22.4, 152.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2203.geometry}
        material={materials['mb:o:36:119']}
        position={[-295.835, -25.6, 24.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2204.geometry}
        material={materials['mb:o:36:119']}
        position={[-295.86, -25.6, 96.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2205.geometry}
        material={materials['mb:o:64:119']}
        position={[-359.898, -12.8, 48.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2206.geometry}
        material={materials['mb:o:64:119']}
        position={[-319.898, -12.8, 48.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2207.geometry}
        material={materials['mb:o:64:119']}
        position={[-351.896, -9.6, 56.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2208.geometry}
        material={materials['mb:o:64:119']}
        position={[-327.896, -9.6, 56.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2209.geometry}
        material={materials['mb:o:64:119']}
        position={[-359.907, -12.8, 24.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part221.geometry}
        material={materials['mb:o:579:141']}
        position={[-555.295, 99.607, 18.2]}
        rotation={[1.117, -0.011, -1.364]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2210.geometry}
        material={materials['mb:o:64:119']}
        position={[-327.863, -16, 152.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2211.geometry}
        material={materials['mb:o:64:119']}
        position={[-319.86, -19.2, 160.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2212.geometry}
        material={materials['mb:o:64:119']}
        position={[-319.871, -16, 128.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2213.geometry}
        material={materials['mb:o:64:119']}
        position={[-359.882, -16, 96.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2214.geometry}
        material={materials['mb:o:64:27']}
        position={[-339.889, -16, 76.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2215.geometry}
        material={materials['mb:o:64:119']}
        position={[-327.885, -12.8, 88.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2216.geometry}
        material={materials['mb:o:64:27']}
        position={[-335.871, -16, 128.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2217.geometry}
        material={materials['mb:o:64:119']}
        position={[-355.853, -16, 140.11]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2218.geometry}
        material={materials['mb:o:64:119']}
        position={[-335.857, -16, 168.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2219.geometry}
        material={materials['mb:o:64:119']}
        position={[-347.853, -19.2, 180.116]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part222.geometry}
        material={materials['mb:o:579:141']}
        position={[-555.41, 108.866, 22.584]}
        rotation={[1.117, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2220.geometry}
        material={materials['mb:o:64:119']}
        position={[-351.859, -22.4, 192.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2221.geometry}
        material={materials['mb:o:64:119']}
        position={[-307.855, -25.6, 204.094]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2222.geometry}
        material={materials['mb:o:64:119']}
        position={[-355.861, -16, 116.11]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2223.geometry}
        material={materials['mb:o:64:119']}
        position={[-375.857, -12.8, 128.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2224.geometry}
        material={materials['mb:o:64:119']}
        position={[-375.834, -9.6, 104.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2225.geometry}
        material={materials['mb:o:64:119']}
        position={[-375.853, -9.6, 48.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2226.geometry}
        material={materials['mb:o:64:119']}
        position={[-375.907, -9.6, 24.126]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2227.geometry}
        material={materials['mb:o:64:119']}
        position={[-295.863, -25.6, 152.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2228.geometry}
        material={materials['mb:o:64:119']}
        position={[-303.898, -12.8, 48.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2229.geometry}
        material={materials['mb:o:104:119']}
        position={[-359.892, -16, 68.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part223.geometry}
        material={materials['mb:o:579:141']}
        position={[-532.638, 106.313, -4.09]}
        rotation={[1.558, 0.454, -0.756]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2230.geometry}
        material={materials['mb:o:104:119']}
        position={[-383.821, -6.4, 140.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2231.geometry}
        material={materials['mb:o:104:119']}
        position={[-375.818, -9.6, 148.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2232.geometry}
        material={materials['mb:o:104:119']}
        position={[-367.852, -9.6, 52.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2233.geometry}
        material={materials['mb:o:104:119']}
        position={[-367.853, -9.6, 68.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2234.geometry}
        material={materials['mb:o:104:119']}
        position={[-367.861, -12.8, 92.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2235.geometry}
        material={materials['mb:o:104:119']}
        position={[-383.84, 0, 84.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2236.geometry}
        material={materials['mb:o:104:115']}
        position={[-383.857, 0, 36.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2237.geometry}
        material={materials['mb:o:104:119']}
        position={[-288.653, -16.8, 76.1]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2238.geometry}
        material={materials['mb:o:104:119']}
        position={[-288.65, -24.8, 68.1]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2239.geometry}
        material={materials['mb:o:104:115']}
        position={[-303.856, -16, 156.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part224.geometry}
        material={materials['mb:o:579:141']}
        position={[-539.827, 102.807, -4.278]}
        rotation={[1.558, 0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2240.geometry}
        material={materials['mb:o:104:119']}
        position={[-295.85, -12.8, 68.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2241.geometry}
        material={materials['mb:o:104:119']}
        position={[-303.853, -16, 76.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2242.geometry}
        material={materials['mb:o:104:119']}
        position={[-311.836, -12.8, 20.123]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2243.geometry}
        material={materials['mb:o:104:115']}
        position={[-295.834, -12.8, 20.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2244.geometry}
        material={materials['mb:o:104:115']}
        position={[-379.929, 16, 292.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2245.geometry}
        material={materials['mb:o:104:119']}
        position={[-372.745, 4, 340.071]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2246.geometry}
        material={materials['mb:o:104:119']}
        position={[-372.748, 12, 348.071]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2247.geometry}
        material={materials['mb:o:104:119']}
        position={[-379.945, 16, 340.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2248.geometry}
        material={materials['mb:o:9639:119']}
        position={[-339.865, -28.8, 208.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2249.geometry}
        material={materials['mb:o:203:119']}
        position={[-367.904, -12.8, 32.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part225.geometry}
        material={materials['mb:o:579:28']}
        position={[-535.442, 112.066, -4.163]}
        rotation={[1.558, 0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2250.geometry}
        material={materials['mb:o:203:308']}
        position={[-383.858, -12.8, 32.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2251.geometry}
        material={materials['mb:o:203:119']}
        position={[-311.882, -16, 96.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2252.geometry}
        material={materials['mb:o:203:119']}
        position={[-367.882, -16, 96.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2253.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.869, -25.6, 132.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2254.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.872, -25.6, 124.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2255.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.872, -22.4, 124.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2256.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.891, -22.4, 68.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2257.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.891, -25.6, 68.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2258.geometry}
        material={materials['mb:o:203:119']}
        position={[-375.845, -12.8, 72.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2259.geometry}
        material={materials['mb:o:203:119']}
        position={[-383.856, -9.6, 40.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part226.geometry}
        material={materials['mb:o:579:141']}
        position={[-562.305, 99.607, -19.747]}
        rotation={[2.024, 0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2260.geometry}
        material={materials['mb:o:203:308']}
        position={[-303.882, -25.6, 96.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2261.geometry}
        material={materials['mb:o:2:119']}
        position={[-335.861, -12.8, 92.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2262.geometry}
        material={materials['mb:o:2:138']}
        position={[-367.894, -25.6, 172.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2263.geometry}
        material={materials['mb:o:2:138']}
        position={[-375.839, -12.8, 28.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2264.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.827, -12.8, 124.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2265.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.821, -16, 140.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2266.geometry}
        material={materials['mb:o:2:119']}
        position={[-375.81, -19.2, 172.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2267.geometry}
        material={materials['mb:o:2:330']}
        position={[-375.821, -16, 140.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2268.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.818, -12.8, 148.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2269.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.84, -6.4, 84.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part227.geometry}
        material={materials['mb:o:579:141']}
        position={[-562.116, 103.113, -26.935]}
        rotation={[2.024, 0.011, -2.292]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2270.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.849, 3.2, 60.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2271.geometry}
        material={materials['mb:o:2:119']}
        position={[-295.85, -25.6, 68.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2272.geometry}
        material={materials['mb:o:2:119']}
        position={[-303.867, -25.6, 140.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2273.geometry}
        material={materials['mb:o:2:115']}
        position={[-303.869, -22.4, 132.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2274.geometry}
        material={materials['mb:o:2:119']}
        position={[-303.813, -16, 100.09]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2275.geometry}
        material={materials['mb:o:2:119']}
        position={[-311.842, -12.8, 36.123]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2276.geometry}
        material={materials['mb:o:2:115']}
        position={[-375.813, -16, 164.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2277.geometry}
        material={materials['mb:o:37:119']}
        position={[-383.839, -12.8, 88.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2278.geometry}
        material={materials['mb:o:37:119']}
        position={[-311.863, -19.2, 152.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2279.geometry}
        material={materials['mb:o:37:119']}
        position={[-339.861, -28.8, 196.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part228.geometry}
        material={materials['mb:o:579:141']}
        position={[-562.19, 108.866, -24.131]}
        rotation={[2.024, 0.011, 2.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2280.geometry}
        material={materials['mb:o:37:115']}
        position={[-367.863, -19.2, 152.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2281.geometry}
        material={materials['mb:o:37:119']}
        position={[-383.836, -9.6, 96.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2282.geometry}
        material={materials['mb:o:37:119']}
        position={[-383.809, -3.2, 104.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2283.geometry}
        material={materials['mb:o:37:308']}
        position={[-303.885, -22.4, 88.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2284.geometry}
        material={materials['mb:o:210:119']}
        position={[-331.892, -16, 68.11]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2285.geometry}
        material={materials['mb:o:210:115']}
        position={[-383.809, 0, 104.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2286.geometry}
        material={materials['mb:o:210:119']}
        position={[-383.847, -3.2, 64.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2287.geometry}
        material={materials['mb:o:210:119']}
        position={[-383.85, 0, 56.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2288.geometry}
        material={materials['mb:o:210:119']}
        position={[-303.857, -19.2, 160.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2289.geometry}
        material={materials['mb:o:210:119']}
        position={[-303.811, -19.2, 96.09]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part229.geometry}
        material={materials['mb:o:579:141']}
        position={[-562.043, 97.361, -29.739]}
        rotation={[2.024, 0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2290.geometry}
        material={materials['mb:o:210:119']}
        position={[-303.814, -12.8, 24.09]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2291.geometry}
        material={materials['mb:o:30:119']}
        position={[-363.858, -12.8, 84.105]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2292.geometry}
        material={materials['mb:o:30:119']}
        position={[-303.893, -16, 64.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2293.geometry}
        material={materials['mb:o:30:119']}
        position={[-307.831, -9.6, 12.094]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2294.geometry}
        material={materials['mb:o:103:308']}
        position={[-379.875, -16, 24.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2295.geometry}
        material={materials['mb:o:103:119']}
        position={[-339.867, -19.2, 136.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2296.geometry}
        material={materials['mb:o:103:119']}
        position={[-307.865, -25.6, 176.094]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2297.geometry}
        material={materials['mb:o:103:308']}
        position={[-379.817, -25.6, 152.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2298.geometry}
        material={materials['mb:o:149:308']}
        position={[-379.853, -16, 88.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2299.geometry}
        material={materials['mb:o:3:119']}
        position={[-327.892, -9.6, 68.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part230.geometry}
        material={materials['mb:o:579:141']}
        position={[-554.175, 89.076, -24.589]}
        rotation={[1.973, 0.01, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2300.geometry}
        material={materials['mb:o:3:119']}
        position={[-327.908, -9.6, 20.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2301.geometry}
        material={materials['mb:o:3:119']}
        position={[-335.914, -9.6, 4.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2302.geometry}
        material={materials['mb:o:3:330']}
        position={[-335.903, -9.6, 36.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2303.geometry}
        material={materials['mb:o:3:27']}
        position={[-343.908, -9.6, 20.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2304.geometry}
        material={materials['mb:o:3:330']}
        position={[-343.892, -9.6, 68.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2305.geometry}
        material={materials['mb:o:3:119']}
        position={[-359.894, -12.8, 60.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2306.geometry}
        material={materials['mb:o:3:119']}
        position={[-311.897, -9.6, 52.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2307.geometry}
        material={materials['mb:o:3:25']}
        position={[-343.856, -16, 172.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2308.geometry}
        material={materials['mb:o:3:330']}
        position={[-311.856, -16, 172.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2309.geometry}
        material={materials['mb:o:3:330']}
        position={[-327.867, -12.8, 140.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part231.geometry}
        material={materials['mb:o:579:28']}
        position={[-547.456, 86.48, 24.447]}
        rotation={[1.141, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2310.geometry}
        material={materials['mb:o:3:27']}
        position={[-359.856, -19.2, 172.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2311.geometry}
        material={materials['mb:o:3:27']}
        position={[-327.881, -12.8, 100.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2312.geometry}
        material={materials['mb:o:3:119']}
        position={[-343.875, -12.8, 116.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2313.geometry}
        material={materials['mb:o:3:25']}
        position={[-359.878, -16, 108.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2314.geometry}
        material={materials['mb:o:3:27']}
        position={[-351.886, -16, 84.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2315.geometry}
        material={materials['mb:o:3:27']}
        position={[-319.875, -16, 116.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2316.geometry}
        material={materials['mb:o:3:27']}
        position={[-359.864, -19.2, 148.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2317.geometry}
        material={materials['mb:o:3:330']}
        position={[-335.85, -19.2, 188.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2318.geometry}
        material={materials['mb:o:3:330']}
        position={[-367.864, -16, 148.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2319.geometry}
        material={materials['mb:o:3:119']}
        position={[-363.858, -9.6, 84.105]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part232.geometry}
        material={materials['mb:o:579:141']}
        position={[-582.498, 92.384, -5.396]}
        rotation={[1.582, -0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2320.geometry}
        material={materials['mb:o:3:119']}
        position={[-383.868, -3.2, 4.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2321.geometry}
        material={materials['mb:o:3:199']}
        position={[-375.843, 0, 76.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2322.geometry}
        material={materials['mb:o:3:115']}
        position={[-367.85, -25.6, 188.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2323.geometry}
        material={materials['mb:o:3:119']}
        position={[-291.864, -20, 108.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2324.geometry}
        material={materials['mb:o:3:119']}
        position={[-303.828, -9.6, 4.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2325.geometry}
        material={materials['mb:o:3:119']}
        position={[-351.875, -16, 132.109]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2326.geometry}
        material={materials['mb:o:544:25']}
        position={[-339.904, -16, 32.113]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2327.geometry}
        material={materials['mb:o:544:25']}
        position={[-339.882, -19.2, 96.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2328.geometry}
        material={materials['mb:o:164:308']}
        position={[-331.867, -25.6, 8.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2329.geometry}
        material={materials['mb:o:655:115']}
        position={[-303.818, -9.6, 20.09]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part233.geometry}
        material={materials['mb:o:579:28']}
        position={[-585.06, 86.519, -5.463]}
        rotation={[1.582, -0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2330.geometry}
        material={materials['mb:o:357:115']}
        position={[-383.818, -3.2, 132.115]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2331.geometry}
        material={materials['mb:o:357:119']}
        position={[-383.838, 3.2, 92.117]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2332.geometry}
        material={materials['mb:o:357:119']}
        position={[-288.642, -16.8, 44.1]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2333.geometry}
        material={materials['mb:o:357:199']}
        position={[-303.813, -9.6, 36.09]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2334.geometry}
        material={materials['mb:o:357:115']}
        position={[-295.853, -12.8, 76.095]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2335.geometry}
        material={materials['mb:o:357:119']}
        position={[-372.737, 12, 316.071]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2336.geometry}
        material={materials['mb:o:357:115']}
        position={[-379.948, 16, 348.066]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2337.geometry}
        material={materials['mb:o:81:141']}
        position={[-327.9, -9.6, 44.109]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2338.geometry}
        material={materials['mb:o:81:141']}
        position={[-343.903, -9.6, 52.104]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2339.geometry}
        material={materials['mb:o:81:141']}
        position={[-351.903, -12.8, 20.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part234.geometry}
        material={materials['mb:o:579:141']}
        position={[-532.654, 86.745, 3.912]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2340.geometry}
        material={materials['mb:o:81:330']}
        position={[-343.897, -12.8, 36.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2341.geometry}
        material={materials['mb:o:81:141']}
        position={[-327.864, -12.8, 132.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2342.geometry}
        material={materials['mb:o:81:141']}
        position={[-351.883, -16, 92.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2343.geometry}
        material={materials['mb:o:81:330']}
        position={[-327.889, -12.8, 76.109]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2344.geometry}
        material={materials['mb:o:81:141']}
        position={[-343.878, -12.8, 92.104]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2345.geometry}
        material={materials['mb:o:81:141']}
        position={[-335.861, -16, 156.112]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2346.geometry}
        material={materials['mb:o:81:141']}
        position={[-335.847, -22.4, 196.112]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2347.geometry}
        material={materials['mb:o:81:119']}
        position={[-375.808, -23.199, 184.116]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2348.geometry}
        material={materials['mb:o:81:119']}
        position={[-375.872, -12.8, 156.131]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2349.geometry}
        material={materials['mb:o:81:199']}
        position={[-375.832, -3.2, 116.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part235.geometry}
        material={materials['mb:o:579:141']}
        position={[-535.307, 92.568, 3.843]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2350.geometry}
        material={materials['mb:o:81:115']}
        position={[-375.024, -2.4, 108.115]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2351.geometry}
        material={materials['mb:o:81:119']}
        position={[-375.005, -2.4, 52.115]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2352.geometry}
        material={materials['mb:o:81:115']}
        position={[-367.818, -6.4, 76.117]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2353.geometry}
        material={materials['mb:o:81:119']}
        position={[-379.839, -0.8, 28.099]}
        rotation={[-Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2354.geometry}
        material={materials['mb:o:81:115']}
        position={[-383.85, -3.2, 12.095]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2355.geometry}
        material={materials['mb:o:81:119']}
        position={[-367.842, -22.4, 180.101]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2356.geometry}
        material={materials['mb:o:81:119']}
        position={[-367.878, -12.8, 140.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2357.geometry}
        material={materials['mb:o:81:119']}
        position={[-291.836, -20, 28.099]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2358.geometry}
        material={materials['mb:o:81:119']}
        position={[-295.828, -16, 4.098]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2359.geometry}
        material={materials['mb:o:81:119']}
        position={[-291.856, -20, 84.099]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part236.geometry}
        material={materials['mb:o:579:141']}
        position={[-537.168, 35.072, -0.207]}
        rotation={[1.558, 0.467, -1.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2360.geometry}
        material={materials['mb:o:81:115']}
        position={[-288.647, -24.8, 60.1]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2361.geometry}
        material={materials['mb:o:81:119']}
        position={[-287.897, -19.2, 52.095]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2362.geometry}
        material={materials['mb:o:81:119']}
        position={[-295.864, -22.4, 164.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2363.geometry}
        material={materials['mb:o:81:119']}
        position={[-311.867, -16, 140.104]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2364.geometry}
        material={materials['mb:o:81:199']}
        position={[-295.872, -22.4, 116.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2365.geometry}
        material={materials['mb:o:81:119']}
        position={[-295.839, -12.8, 36.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2366.geometry}
        material={materials['mb:o:81:119']}
        position={[-311.883, -12.8, 92.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2367.geometry}
        material={materials['mb:o:81:119']}
        position={[-295.858, -16, 92.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2368.geometry}
        material={materials['mb:o:81:119']}
        position={[-307.818, -4, 20.091]}
        rotation={[Math.PI / 2, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2369.geometry}
        material={materials['mb:o:81:115']}
        position={[-303.836, -6.4, 28.095]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part237.geometry}
        material={materials['mb:o:579:141']}
        position={[-582.924, 33.327, -1.405]}
        rotation={[1.579, -0.307, 1.598]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2370.geometry}
        material={materials['mb:o:81:119']}
        position={[-375.932, 8.8, 300.07]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2371.geometry}
        material={materials['mb:o:81:119']}
        position={[-379.923, 12.8, 276.069]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2372.geometry}
        material={materials['mb:o:81:119']}
        position={[-379.934, 16, 308.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2373.geometry}
        material={materials['mb:o:81:119']}
        position={[-371.992, 9.6, 324.066]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2374.geometry}
        material={materials['mb:o:81:115']}
        position={[-372.743, 4, 332.071]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2375.geometry}
        material={materials['mb:o:81:119']}
        position={[-375.951, 8.8, 356.07]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2376.geometry}
        material={materials['mb:o:81:119']}
        position={[-379.954, 12.8, 364.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2377.geometry}
        material={materials['mb:o:163:119']}
        position={[-375.838, -9.6, 92.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2378.geometry}
        material={materials['mb:o:163:119']}
        position={[-375.835, -9.6, 84.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2379.geometry}
        material={materials['mb:o:163:115']}
        position={[-375.829, -6.4, 68.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part238.geometry}
        material={materials['mb:o:579:141']}
        position={[-536.382, 56.916, 3.815]}
        rotation={[1.559, 0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2380.geometry}
        material={materials['mb:o:163:115']}
        position={[-383.839, -6.4, 28.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2381.geometry}
        material={materials['mb:o:163:119']}
        position={[-295.842, -22.4, 44.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2382.geometry}
        material={materials['mb:o:163:199']}
        position={[-295.847, -22.4, 60.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2383.geometry}
        material={materials['mb:o:163:119']}
        position={[-295.85, -22.4, 68.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2384.geometry}
        material={materials['mb:o:163:119']}
        position={[-295.853, -22.4, 76.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2385.geometry}
        material={materials['mb:o:163:119']}
        position={[-379.937, 6.4, 316.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2386.geometry}
        material={materials['mb:o:163:199']}
        position={[-379.943, 6.4, 332.069]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2387.geometry}
        material={materials['mb:o:802:119']}
        position={[-383.831, -9.6, 128.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2388.geometry}
        material={materials['mb:o:802:119']}
        position={[-383.823, -6.4, 104.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2389.geometry}
        material={materials['mb:o:802:115']}
        position={[-383.803, -6.4, 48.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part239.geometry}
        material={materials['mb:o:579:141']}
        position={[-563.409, 51.211, 22.44]}
        rotation={[1.122, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2390.geometry}
        material={materials['mb:o:802:115']}
        position={[-303.86, -22.4, 152.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2391.geometry}
        material={materials['mb:o:824:119']}
        position={[-379.81, -22.4, 172.116]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2392.geometry}
        material={materials['mb:o:1294:119']}
        position={[-579.853, 12.8, 64.169]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2393.geometry}
        material={materials['mb:o:1294:119']}
        position={[-499.814, -3.2, 80.175]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2394.geometry}
        material={materials['mb:o:2907:199']}
        position={[-571.832, 3.2, 108.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2395.geometry}
        material={materials['mb:o:2907:119']}
        position={[-571.813, 9.6, 52.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2396.geometry}
        material={materials['mb:o:2907:119']}
        position={[-491.831, -12.8, -3.833]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2397.geometry}
        material={materials['mb:o:2907:119']}
        position={[-499.831, -6.4, -3.836]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2398.geometry}
        material={materials['mb:o:2907:119']}
        position={[-491.87, -12.8, 132.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2399.geometry}
        material={materials['mb:o:2907:115']}
        position={[-491.061, -8.8, 140.172]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part240.geometry}
        material={materials['mb:o:579:141']}
        position={[-554.184, 50.989, -24.243]}
        rotation={[2, 0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2400.geometry}
        material={materials['mb:o:1642:119']}
        position={[-499.861, -19.2, 188.161]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2401.geometry}
        material={materials['mb:o:217:119']}
        position={[-535.862, -12.8, 184.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2402.geometry}
        material={materials['mb:o:3678:119']}
        position={[-491.834, 0, 4.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2403.geometry}
        material={materials['mb:o:150:308']}
        position={[-567.87, -16, 0.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2404.geometry}
        material={materials['mb:o:150:308']}
        position={[-535.87, -16, 40.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2405.geometry}
        material={materials['mb:o:150:308']}
        position={[-575.834, -16, 104.185]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2406.geometry}
        material={materials['mb:o:63:119']}
        position={[-571.846, 0, 68.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2407.geometry}
        material={materials['mb:o:63:119']}
        position={[-571.852, 0, 52.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2408.geometry}
        material={materials['mb:o:63:119']}
        position={[-491.9, -12.8, 44.167]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2409.geometry}
        material={materials['mb:o:63:115']}
        position={[-499.878, -12.8, 108.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part241.geometry}
        material={materials['mb:o:579:141']}
        position={[-535.652, 131.266, 3.834]}
        rotation={[1.558, 0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2410.geometry}
        material={materials['mb:o:332:308']}
        position={[-575.853, -16, 48.185]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2411.geometry}
        material={materials['mb:o:358:308']}
        position={[-499.907, -16, 24.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2412.geometry}
        material={materials['mb:o:67:119']}
        position={[-551.867, -16, 168.193]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2413.geometry}
        material={materials['mb:o:67:308']}
        position={[-575.823, -12.8, 136.185]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2414.geometry}
        material={materials['mb:o:67:308']}
        position={[-575.823, -9.6, 136.185]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2415.geometry}
        material={materials['mb:o:281:119']}
        position={[-499.867, -19.2, 200.194]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2416.geometry}
        material={materials['mb:o:281:119']}
        position={[-519.869, -19.2, 204.187]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2417.geometry}
        material={materials['mb:o:281:119']}
        position={[-487.853, -11.2, 60.168]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2418.geometry}
        material={materials['mb:o:281:119']}
        position={[-495.836, -6.4, 12.165]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2419.geometry}
        material={materials['mb:o:45:119']}
        position={[-519.862, -12.8, 184.187]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part242.geometry}
        material={materials['mb:o:579:141']}
        position={[-532.848, 125.513, 3.907]}
        rotation={[1.558, 0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2420.geometry}
        material={materials['mb:o:33:27']}
        position={[-527.905, -3.2, 28.179]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2421.geometry}
        material={materials['mb:o:33:119']}
        position={[-535.897, 0, 52.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2422.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.893, 0, 40.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2423.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.885, 0, 16.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2424.geometry}
        material={materials['mb:o:33:119']}
        position={[-535.881, 0, 4.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2425.geometry}
        material={materials['mb:o:33:119']}
        position={[-547.882, -3.2, 0.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2426.geometry}
        material={materials['mb:o:33:119']}
        position={[-563.89, 0, 32.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2427.geometry}
        material={materials['mb:o:33:119']}
        position={[-547.907, -3.2, 24.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2428.geometry}
        material={materials['mb:o:33:119']}
        position={[-539.887, -6.4, 152.18]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2429.geometry}
        material={materials['mb:o:33:119']}
        position={[-507.887, -6.4, 152.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part243.geometry}
        material={materials['mb:o:579:141']}
        position={[-563.408, 128.066, 22.375]}
        rotation={[1.117, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2430.geometry}
        material={materials['mb:o:33:119']}
        position={[-519.87, -6.4, 132.176]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2431.geometry}
        material={materials['mb:o:33:119']}
        position={[-555.874, -6.4, 144.164]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2432.geometry}
        material={materials['mb:o:33:119']}
        position={[-523.876, -6.4, 112.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2433.geometry}
        material={materials['mb:o:33:119']}
        position={[-547.882, -6.4, 96.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2434.geometry}
        material={materials['mb:o:33:119']}
        position={[-519.892, -6.4, 68.176]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2435.geometry}
        material={materials['mb:o:33:119']}
        position={[-539.868, -3.2, 96.18]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2436.geometry}
        material={materials['mb:o:33:119']}
        position={[-563.868, -3.2, 96.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2437.geometry}
        material={materials['mb:o:33:119']}
        position={[-507.868, -3.2, 96.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2438.geometry}
        material={materials['mb:o:33:119']}
        position={[-507.86, -3.2, 72.191]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2439.geometry}
        material={materials['mb:o:33:25']}
        position={[-519.894, -12.8, 172.187]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part244.geometry}
        material={materials['mb:o:579:141']}
        position={[-563.481, 122.313, 25.179]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2440.geometry}
        material={materials['mb:o:33:138']}
        position={[-535.894, -12.8, 172.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2441.geometry}
        material={materials['mb:o:33:119']}
        position={[-535.878, -6.4, 108.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2442.geometry}
        material={materials['mb:o:33:119']}
        position={[-551.875, -6.4, 116.176]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2443.geometry}
        material={materials['mb:o:33:119']}
        position={[-539.876, -6.4, 120.18]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2444.geometry}
        material={materials['mb:o:33:119']}
        position={[-555.876, -9.6, 152.164]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2445.geometry}
        material={materials['mb:o:33:119']}
        position={[-515.893, -9.6, 168.189]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2446.geometry}
        material={materials['mb:o:33:119']}
        position={[-551.894, -12.8, 172.176]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2447.geometry}
        material={materials['mb:o:33:119']}
        position={[-507.865, -12.8, 176.164]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2448.geometry}
        material={materials['mb:o:33:119']}
        position={[-551.858, -19.2, 196.179]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2449.geometry}
        material={materials['mb:o:33:27']}
        position={[-547.859, -16, 192.178]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part245.geometry}
        material={materials['mb:o:579:141']}
        position={[-581.948, 131.266, -5.381]}
        rotation={[1.584, -0.454, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2450.geometry}
        material={materials['mb:o:33:119']}
        position={[-563.882, 0, 8.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2451.geometry}
        material={materials['mb:o:33:138']}
        position={[-571.879, -3.2, 0.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2452.geometry}
        material={materials['mb:o:33:330']}
        position={[-563.887, -6.4, 152.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2453.geometry}
        material={materials['mb:o:33:119']}
        position={[-563.879, -6.4, 128.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2454.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.814, -9.6, 160.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2455.geometry}
        material={materials['mb:o:33:115']}
        position={[-575.811, -13.6, 169.785]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2456.geometry}
        material={materials['mb:o:33:308']}
        position={[-575.816, -12.8, 156.185]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2457.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.817, -6.4, 152.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2458.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.823, -3.2, 136.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2459.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.834, -3.2, 104.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part246.geometry}
        material={materials['mb:o:579:141']}
        position={[-584.752, 125.513, -5.455]}
        rotation={[1.584, -0.454, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2460.geometry}
        material={materials['mb:o:33:119']}
        position={[-574.234, 4, 120.182]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2461.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.034, 4, 120.183]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2462.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.817, 3.2, 112.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2463.geometry}
        material={materials['mb:o:33:119']}
        position={[-575.824, 0, 132.185]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2464.geometry}
        material={materials['mb:o:33:119']}
        position={[-567.839, 5.6, 80.185]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2465.geometry}
        material={materials['mb:o:33:115']}
        position={[-571.839, 9.6, 80.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2466.geometry}
        material={materials['mb:o:33:119']}
        position={[-574.225, 7.2, 96.182]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2467.geometry}
        material={materials['mb:o:33:115']}
        position={[-574.206, 7.2, 40.182]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2468.geometry}
        material={materials['mb:o:33:138']}
        position={[-563.857, -3.2, 64.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2469.geometry}
        material={materials['mb:o:33:138']}
        position={[-547.893, -6.4, 64.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part247.geometry}
        material={materials['mb:o:579:141']}
        position={[-535.307, 73.368, 3.843]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2470.geometry}
        material={materials['mb:o:33:138']}
        position={[-555.89, -6.4, 72.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2471.geometry}
        material={materials['mb:o:33:119']}
        position={[-575.845, 3.2, 28.168]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2472.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.887, 0, 0.175]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2473.geometry}
        material={materials['mb:o:33:119']}
        position={[-575.845, 6.4, 28.168]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2474.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.854, 3.2, 0.164]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2475.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.85, 3.2, 56.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2476.geometry}
        material={materials['mb:o:33:115']}
        position={[-487.863, -10.4, 88.168]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2477.geometry}
        material={materials['mb:o:33:119']}
        position={[-484.652, -7.2, 56.169]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2478.geometry}
        material={materials['mb:o:33:115']}
        position={[-487.9, -16, 44.165]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2479.geometry}
        material={materials['mb:o:33:119']}
        position={[-491.854, -19.2, 176.167]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part248.geometry}
        material={materials['mb:o:579:141']}
        position={[-554.175, 69.876, -24.589]}
        rotation={[1.973, 0.01, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2480.geometry}
        material={materials['mb:o:33:115']}
        position={[-491.857, -16, 168.167]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2481.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.865, -12.8, 168.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2482.geometry}
        material={materials['mb:o:33:115']}
        position={[-494.263, -8.8, 144.171]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2483.geometry}
        material={materials['mb:o:33:119']}
        position={[-507.865, -3.2, 144.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2484.geometry}
        material={materials['mb:o:33:119']}
        position={[-491.871, -16, 128.167]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2485.geometry}
        material={materials['mb:o:33:115']}
        position={[-491.876, -16, 112.167]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2486.geometry}
        material={materials['mb:o:33:119']}
        position={[-495.87, -9.6, 132.165]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2487.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.868, -6.4, 136.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2488.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.874, -9.6, 120.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2489.geometry}
        material={materials['mb:o:33:119']}
        position={[-495.842, -6.4, 28.165]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part249.geometry}
        material={materials['mb:o:579:141']}
        position={[-582.498, 73.184, -5.396]}
        rotation={[1.582, -0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2490.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.893, -9.6, 64.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2491.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.901, -6.4, 40.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2492.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.814, -3.2, 88.175]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2493.geometry}
        material={materials['mb:o:33:119']}
        position={[-507.898, -3.2, 48.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2494.geometry}
        material={materials['mb:o:33:119']}
        position={[-487.834, -10.4, 4.168]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2495.geometry}
        material={materials['mb:o:33:119']}
        position={[-507.832, -3.2, 0.161]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2496.geometry}
        material={materials['mb:o:33:119']}
        position={[-511.831, 0, -3.84]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2497.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.834, 3.2, 4.164]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2498.geometry}
        material={materials['mb:o:33:119']}
        position={[-535.88, -6.4, 132.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2499.geometry}
        material={materials['mb:o:33:119']}
        position={[-495.81, -6.4, 76.176]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part250.geometry}
        material={materials['mb:o:579:141']}
        position={[-594.088, 67.589, 10.306]}
        rotation={[1.582, -0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2500.geometry}
        material={materials['mb:o:33:115']}
        position={[-579.817, -6.4, 152.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2501.geometry}
        material={materials['mb:o:33:138']}
        position={[-563.893, -19.2, 176.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2502.geometry}
        material={materials['mb:o:354:119']}
        position={[-531.894, -9.6, 172.183]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2503.geometry}
        material={materials['mb:o:354:119']}
        position={[-539.861, -9.6, 180.18]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2504.geometry}
        material={materials['mb:o:354:119']}
        position={[-571.811, -13.599, 172.985]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2505.geometry}
        material={materials['mb:o:354:119']}
        position={[-579.821, 3.2, 124.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2506.geometry}
        material={materials['mb:o:354:199']}
        position={[-579.821, 0, 140.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2507.geometry}
        material={materials['mb:o:354:119']}
        position={[-571.832, 0, 108.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2508.geometry}
        material={materials['mb:o:354:119']}
        position={[-571.024, 7.2, 92.183]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2509.geometry}
        material={materials['mb:o:354:119']}
        position={[-571.005, 7.2, 36.183]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part251.geometry}
        material={materials['mb:o:579:141']}
        position={[-563.416, 70.189, 22.696]}
        rotation={[1.141, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2510.geometry}
        material={materials['mb:o:354:119']}
        position={[-571.832, 0, 60.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2511.geometry}
        material={materials['mb:o:354:119']}
        position={[-567.832, 8.8, 60.185]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2512.geometry}
        material={materials['mb:o:354:138']}
        position={[-563.858, 0, 68.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2513.geometry}
        material={materials['mb:o:354:119']}
        position={[-555.892, -3.2, 68.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2514.geometry}
        material={materials['mb:o:354:119']}
        position={[-563.897, 0, 52.191]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2515.geometry}
        material={materials['mb:o:354:119']}
        position={[-571.845, 0, 28.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2516.geometry}
        material={materials['mb:o:354:119']}
        position={[-579.871, 0, -3.814]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2517.geometry}
        material={materials['mb:o:354:119']}
        position={[-579.865, 3.2, 12.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2518.geometry}
        material={materials['mb:o:354:199']}
        position={[-579.865, 6.4, 12.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2519.geometry}
        material={materials['mb:o:354:119']}
        position={[-579.846, 9.6, 68.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part252.geometry}
        material={materials['mb:o:579:141']}
        position={[-554.193, 128.066, -23.922]}
        rotation={[2.024, 0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2520.geometry}
        material={materials['mb:o:354:115']}
        position={[-579.857, 6.4, 36.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2521.geometry}
        material={materials['mb:o:354:308']}
        position={[-491.831, -16, -3.833]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2522.geometry}
        material={materials['mb:o:354:119']}
        position={[-491.831, -9.6, -3.833]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2523.geometry}
        material={materials['mb:o:354:115']}
        position={[-487.842, -10.4, 28.168]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2524.geometry}
        material={materials['mb:o:354:119']}
        position={[-491.845, -16, 36.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2525.geometry}
        material={materials['mb:o:354:115']}
        position={[-483.9, -12.8, 44.164]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2526.geometry}
        material={materials['mb:o:354:115']}
        position={[-487.845, -7.2, 36.168]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2527.geometry}
        material={materials['mb:o:354:199']}
        position={[-491.858, -12.8, 164.167]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2528.geometry}
        material={materials['mb:o:354:115']}
        position={[-491.064, -8.8, 148.172]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2529.geometry}
        material={materials['mb:o:354:115']}
        position={[-487.861, -8.8, 140.173]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part253.geometry}
        material={materials['mb:o:579:141']}
        position={[-554.119, 122.313, -26.726]}
        rotation={[2.024, 0.011, 2.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2530.geometry}
        material={materials['mb:o:354:119']}
        position={[-491.861, -16, 156.167]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2531.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.861, -12.8, 156.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2532.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.861, -6.4, 156.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2533.geometry}
        material={materials['mb:o:354:217']}
        position={[-507.867, -6.4, 140.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2534.geometry}
        material={materials['mb:o:354:115']}
        position={[-491.875, -12.8, 116.167]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2535.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.818, 0, 20.158]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2536.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.896, -3.2, 56.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2537.geometry}
        material={materials['mb:o:354:119']}
        position={[-491.818, -3.2, 20.161]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2538.geometry}
        material={materials['mb:o:354:119']}
        position={[-507.894, -3.2, 60.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2539.geometry}
        material={materials['mb:o:354:217']}
        position={[-515.867, -9.6, 140.175]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part254.geometry}
        material={materials['mb:o:45:192']}
        position={[-558.8, 3.374, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2540.geometry}
        material={materials['mb:o:354:115']}
        position={[-491.864, -6.4, 92.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2541.geometry}
        material={materials['mb:o:354:115']}
        position={[-495.821, 5.6, 12.157]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2542.geometry}
        material={materials['mb:o:354:119']}
        position={[-487.836, -9.6, 12.168]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2543.geometry}
        material={materials['mb:o:354:119']}
        position={[-491.834, -3.2, 4.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2544.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.831, -3.2, -3.836]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2545.geometry}
        material={materials['mb:o:354:119']}
        position={[-579.838, 12.8, 92.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2546.geometry}
        material={materials['mb:o:274:119']}
        position={[-511.874, -19.2, 120.173]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2547.geometry}
        material={materials['mb:o:274:308']}
        position={[-559.874, -19.2, 120.19]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2548.geometry}
        material={materials['mb:o:400:119']}
        position={[-535.898, -3.2, 48.182]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2549.geometry}
        material={materials['mb:o:400:119']}
        position={[-527.912, -3.2, 8.179]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part255.geometry}
        material={materials['mb:o:33:192']}
        position={[-578.655, 52.509, -5.295]}
        rotation={[1.583, -0.428, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2550.geometry}
        material={materials['mb:o:400:119']}
        position={[-535.863, -9.6, 152.182]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2551.geometry}
        material={materials['mb:o:400:119']}
        position={[-527.885, -6.4, 88.179]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2552.geometry}
        material={materials['mb:o:356:308']}
        position={[-511.904, -19.2, 32.173]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2553.geometry}
        material={materials['mb:o:356:308']}
        position={[-559.904, -19.2, 32.19]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2554.geometry}
        material={materials['mb:o:38:138']}
        position={[-527.859, -19.2, 176.185]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2555.geometry}
        material={materials['mb:o:369:119']}
        position={[-527.856, -16, 168.185]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2556.geometry}
        material={materials['mb:o:223:25']}
        position={[-535.865, -12.8, 144.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2557.geometry}
        material={materials['mb:o:36:119']}
        position={[-491.838, -16, 16.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2558.geometry}
        material={materials['mb:o:36:119']}
        position={[-491.863, -16, 88.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2559.geometry}
        material={materials['mb:o:64:119']}
        position={[-555.901, -3.2, 40.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part256.geometry}
        material={materials['mb:o:33:192']}
        position={[-558.243, 32.268, -22.053]}
        rotation={[1.878, 0.008, -1.546]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2560.geometry}
        material={materials['mb:o:64:119']}
        position={[-515.901, -3.2, 40.175]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2561.geometry}
        material={materials['mb:o:64:119']}
        position={[-547.898, 0, 48.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2562.geometry}
        material={materials['mb:o:64:119']}
        position={[-523.898, 0, 48.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2563.geometry}
        material={materials['mb:o:64:119']}
        position={[-555.91, -3.2, 16.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2564.geometry}
        material={materials['mb:o:64:119']}
        position={[-523.865, -6.4, 144.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2565.geometry}
        material={materials['mb:o:64:119']}
        position={[-515.863, -9.6, 152.175]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2566.geometry}
        material={materials['mb:o:64:119']}
        position={[-515.874, -6.4, 120.175]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2567.geometry}
        material={materials['mb:o:64:119']}
        position={[-555.885, -6.4, 88.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2568.geometry}
        material={materials['mb:o:64:27']}
        position={[-535.892, -6.4, 68.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2569.geometry}
        material={materials['mb:o:64:119']}
        position={[-523.887, -3.2, 80.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part257.geometry}
        material={materials['mb:o:33:192']}
        position={[-580.351, 107.02, 2.663]}
        rotation={[1.582, -0.409, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2570.geometry}
        material={materials['mb:o:64:27']}
        position={[-531.874, -6.4, 120.18]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2571.geometry}
        material={materials['mb:o:64:119']}
        position={[-551.856, -6.4, 132.179]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2572.geometry}
        material={materials['mb:o:64:119']}
        position={[-531.86, -6.4, 160.18]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2573.geometry}
        material={materials['mb:o:64:119']}
        position={[-543.856, -9.6, 172.185]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2574.geometry}
        material={materials['mb:o:64:119']}
        position={[-547.862, -12.8, 184.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2575.geometry}
        material={materials['mb:o:64:119']}
        position={[-503.858, -16, 196.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2576.geometry}
        material={materials['mb:o:64:119']}
        position={[-551.864, -6.4, 108.179]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2577.geometry}
        material={materials['mb:o:64:119']}
        position={[-571.86, -3.2, 120.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2578.geometry}
        material={materials['mb:o:64:119']}
        position={[-571.836, 0, 96.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2579.geometry}
        material={materials['mb:o:64:119']}
        position={[-571.856, 0, 40.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part258.geometry}
        material={materials['mb:o:33:141']}
        position={[-577.809, 112.893, 2.73]}
        rotation={[1.582, -0.409, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2580.geometry}
        material={materials['mb:o:64:119']}
        position={[-571.91, 0, 16.194]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2581.geometry}
        material={materials['mb:o:64:119']}
        position={[-491.865, -16, 144.167]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2582.geometry}
        material={materials['mb:o:64:119']}
        position={[-499.901, -3.2, 40.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2583.geometry}
        material={materials['mb:o:104:119']}
        position={[-555.894, -6.4, 60.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2584.geometry}
        material={materials['mb:o:104:119']}
        position={[-579.824, 3.2, 132.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2585.geometry}
        material={materials['mb:o:104:119']}
        position={[-571.821, 0, 140.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2586.geometry}
        material={materials['mb:o:104:119']}
        position={[-563.854, 0, 44.18]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2587.geometry}
        material={materials['mb:o:104:119']}
        position={[-563.856, 0, 60.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2588.geometry}
        material={materials['mb:o:104:119']}
        position={[-563.864, -3.2, 84.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2589.geometry}
        material={materials['mb:o:104:119']}
        position={[-579.843, 9.6, 76.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part259.geometry}
        material={materials['mb:o:33:192']}
        position={[-555.353, 104.236, 20.392]}
        rotation={[1.117, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2590.geometry}
        material={materials['mb:o:104:115']}
        position={[-579.86, 9.6, 28.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2591.geometry}
        material={materials['mb:o:104:119']}
        position={[-484.656, -7.2, 68.169]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2592.geometry}
        material={materials['mb:o:104:119']}
        position={[-484.653, -15.2, 60.169]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2593.geometry}
        material={materials['mb:o:104:115']}
        position={[-499.858, -6.4, 148.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2594.geometry}
        material={materials['mb:o:104:119']}
        position={[-491.853, -3.2, 60.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2595.geometry}
        material={materials['mb:o:104:119']}
        position={[-499.856, -6.4, 68.164]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2596.geometry}
        material={materials['mb:o:104:119']}
        position={[-507.839, -3.2, 12.191]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2597.geometry}
        material={materials['mb:o:104:115']}
        position={[-491.836, -3.2, 12.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2598.geometry}
        material={materials['mb:o:9639:119']}
        position={[-535.867, -19.2, 200.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2599.geometry}
        material={materials['mb:o:203:119']}
        position={[-563.907, -3.2, 24.191]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part260.geometry}
        material={materials['mb:o:33:141']}
        position={[-555.279, 109.989, 17.588]}
        rotation={[1.117, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2600.geometry}
        material={materials['mb:o:203:308']}
        position={[-579.861, -3.2, 24.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2601.geometry}
        material={materials['mb:o:203:119']}
        position={[-507.885, -6.4, 88.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2602.geometry}
        material={materials['mb:o:203:119']}
        position={[-563.885, -6.4, 88.191]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2603.geometry}
        material={materials['mb:o:203:25']}
        position={[-535.872, -16, 124.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2604.geometry}
        material={materials['mb:o:203:25']}
        position={[-535.875, -16, 116.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2605.geometry}
        material={materials['mb:o:203:25']}
        position={[-535.875, -12.8, 116.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2606.geometry}
        material={materials['mb:o:203:25']}
        position={[-535.894, -12.8, 60.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2607.geometry}
        material={materials['mb:o:203:25']}
        position={[-535.894, -16, 60.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2608.geometry}
        material={materials['mb:o:203:119']}
        position={[-571.847, -3.2, 64.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2609.geometry}
        material={materials['mb:o:203:119']}
        position={[-579.858, 0, 32.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part261.geometry}
        material={materials['mb:o:33:141']}
        position={[-533.428, 98.808, -4.111]}
        rotation={[1.558, 0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2610.geometry}
        material={materials['mb:o:203:308']}
        position={[-499.885, -16, 88.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2611.geometry}
        material={materials['mb:o:2:119']}
        position={[-531.864, -3.2, 84.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2612.geometry}
        material={materials['mb:o:2:138']}
        position={[-563.897, -16, 164.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2613.geometry}
        material={materials['mb:o:2:138']}
        position={[-571.842, -3.2, 20.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2614.geometry}
        material={materials['mb:o:2:119']}
        position={[-579.829, -3.2, 116.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2615.geometry}
        material={materials['mb:o:2:119']}
        position={[-579.824, -6.4, 132.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2616.geometry}
        material={materials['mb:o:2:119']}
        position={[-571.813, -9.6, 164.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2617.geometry}
        material={materials['mb:o:2:330']}
        position={[-571.824, -6.4, 132.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2618.geometry}
        material={materials['mb:o:2:119']}
        position={[-579.821, -3.2, 140.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2619.geometry}
        material={materials['mb:o:2:119']}
        position={[-579.843, 3.2, 76.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part262.geometry}
        material={materials['mb:o:33:192']}
        position={[-537.634, 107.436, -4.221]}
        rotation={[1.558, 0.454, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2620.geometry}
        material={materials['mb:o:2:119']}
        position={[-579.852, 12.8, 52.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2621.geometry}
        material={materials['mb:o:2:119']}
        position={[-491.853, -16, 60.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2622.geometry}
        material={materials['mb:o:2:119']}
        position={[-499.87, -16, 132.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2623.geometry}
        material={materials['mb:o:2:115']}
        position={[-499.872, -12.8, 124.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2624.geometry}
        material={materials['mb:o:2:119']}
        position={[-499.816, -6.4, 92.158]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2625.geometry}
        material={materials['mb:o:2:119']}
        position={[-507.845, -3.2, 28.191]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2626.geometry}
        material={materials['mb:o:2:115']}
        position={[-571.816, -6.4, 156.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2627.geometry}
        material={materials['mb:o:37:119']}
        position={[-579.842, -3.2, 80.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2628.geometry}
        material={materials['mb:o:37:119']}
        position={[-507.865, -9.6, 144.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2629.geometry}
        material={materials['mb:o:37:119']}
        position={[-535.863, -19.2, 188.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part263.geometry}
        material={materials['mb:o:33:141']}
        position={[-540.438, 113.189, -4.294]}
        rotation={[1.558, 0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2630.geometry}
        material={materials['mb:o:37:115']}
        position={[-563.865, -9.6, 144.191]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2631.geometry}
        material={materials['mb:o:37:119']}
        position={[-579.839, 0, 88.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2632.geometry}
        material={materials['mb:o:37:119']}
        position={[-579.812, 6.4, 96.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2633.geometry}
        material={materials['mb:o:37:308']}
        position={[-499.887, -12.8, 80.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2634.geometry}
        material={materials['mb:o:210:119']}
        position={[-527.894, -6.4, 60.179]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2635.geometry}
        material={materials['mb:o:210:115']}
        position={[-579.812, 9.6, 96.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2636.geometry}
        material={materials['mb:o:210:119']}
        position={[-579.85, 6.4, 56.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2637.geometry}
        material={materials['mb:o:210:119']}
        position={[-579.853, 9.6, 48.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2638.geometry}
        material={materials['mb:o:210:119']}
        position={[-499.86, -9.6, 152.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2639.geometry}
        material={materials['mb:o:210:119']}
        position={[-499.814, -9.6, 88.158]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part264.geometry}
        material={materials['mb:o:33:192']}
        position={[-562.247, 104.236, -21.939]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2640.geometry}
        material={materials['mb:o:210:119']}
        position={[-499.817, -3.2, 16.158]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2641.geometry}
        material={materials['mb:o:30:119']}
        position={[-559.861, -3.2, 76.173]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2642.geometry}
        material={materials['mb:o:30:119']}
        position={[-499.896, -6.4, 56.169]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2643.geometry}
        material={materials['mb:o:30:119']}
        position={[-503.834, 0, 4.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2644.geometry}
        material={materials['mb:o:103:308']}
        position={[-575.878, -6.4, 16.185]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2645.geometry}
        material={materials['mb:o:103:119']}
        position={[-535.87, -9.6, 128.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2646.geometry}
        material={materials['mb:o:103:119']}
        position={[-503.867, -16, 168.162]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2647.geometry}
        material={materials['mb:o:103:308']}
        position={[-575.82, -16, 144.185]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2648.geometry}
        material={materials['mb:o:149:308']}
        position={[-575.856, -6.4, 80.185]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2649.geometry}
        material={materials['mb:o:3:119']}
        position={[-523.894, 0, 60.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part265.geometry}
        material={materials['mb:o:33:141']}
        position={[-562.321, 109.989, -19.135]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2650.geometry}
        material={materials['mb:o:3:119']}
        position={[-523.911, 0, 12.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2651.geometry}
        material={materials['mb:o:3:119']}
        position={[-531.916, 0, -3.82]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2652.geometry}
        material={materials['mb:o:3:330']}
        position={[-531.905, 0, 28.18]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2653.geometry}
        material={materials['mb:o:3:27']}
        position={[-539.911, 0, 12.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2654.geometry}
        material={materials['mb:o:3:330']}
        position={[-539.894, 0, 60.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2655.geometry}
        material={materials['mb:o:3:119']}
        position={[-555.897, -3.2, 52.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2656.geometry}
        material={materials['mb:o:3:119']}
        position={[-507.9, 0, 44.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2657.geometry}
        material={materials['mb:o:3:25']}
        position={[-539.858, -6.4, 164.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2658.geometry}
        material={materials['mb:o:3:330']}
        position={[-507.858, -6.4, 164.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2659.geometry}
        material={materials['mb:o:3:330']}
        position={[-523.87, -3.2, 132.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part266.geometry}
        material={materials['mb:o:33:192']}
        position={[-554.238, 84.564, -22.165]}
        rotation={[1.973, 0.01, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2660.geometry}
        material={materials['mb:o:3:27']}
        position={[-555.858, -9.6, 164.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2661.geometry}
        material={materials['mb:o:3:27']}
        position={[-523.883, -3.2, 92.178]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2662.geometry}
        material={materials['mb:o:3:119']}
        position={[-539.878, -3.2, 108.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2663.geometry}
        material={materials['mb:o:3:25']}
        position={[-555.881, -6.4, 100.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2664.geometry}
        material={materials['mb:o:3:27']}
        position={[-547.889, -6.4, 76.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2665.geometry}
        material={materials['mb:o:3:27']}
        position={[-515.878, -6.4, 108.175]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2666.geometry}
        material={materials['mb:o:3:27']}
        position={[-555.867, -9.6, 140.189]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2667.geometry}
        material={materials['mb:o:3:330']}
        position={[-531.853, -9.6, 180.18]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2668.geometry}
        material={materials['mb:o:3:330']}
        position={[-563.867, -6.4, 140.191]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2669.geometry}
        material={materials['mb:o:3:119']}
        position={[-559.861, 0, 76.173]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part267.geometry}
        material={materials['mb:o:33:192']}
        position={[-563.356, 84.814, 20.392]}
        rotation={[1.141, -0.011, 1.595]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2670.geometry}
        material={materials['mb:o:3:119']}
        position={[-579.871, 6.4, -3.814]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2671.geometry}
        material={materials['mb:o:3:199']}
        position={[-571.846, 9.6, 68.183]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2672.geometry}
        material={materials['mb:o:3:115']}
        position={[-563.853, -16, 180.191]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2673.geometry}
        material={materials['mb:o:3:119']}
        position={[-487.867, -10.4, 100.168]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2674.geometry}
        material={materials['mb:o:3:119']}
        position={[-499.831, 0, -3.836]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2675.geometry}
        material={materials['mb:o:3:119']}
        position={[-547.878, -6.4, 124.178]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2676.geometry}
        material={materials['mb:o:544:25']}
        position={[-535.907, -6.4, 24.182]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2677.geometry}
        material={materials['mb:o:544:25']}
        position={[-535.884, -9.6, 88.182]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2678.geometry}
        material={materials['mb:o:164:308']}
        position={[-527.87, -16, 0.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2679.geometry}
        material={materials['mb:o:655:115']}
        position={[-499.821, 0, 12.158]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part268.geometry}
        material={materials['mb:o:33:192']}
        position={[-580.115, 87.85, -5.333]}
        rotation={[1.582, -0.412, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2680.geometry}
        material={materials['mb:o:357:115']}
        position={[-579.821, 6.4, 124.183]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2681.geometry}
        material={materials['mb:o:357:119']}
        position={[-579.841, 12.8, 84.186]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2682.geometry}
        material={materials['mb:o:357:119']}
        position={[-484.645, -7.2, 36.169]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2683.geometry}
        material={materials['mb:o:357:199']}
        position={[-499.816, 0, 28.158]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2684.geometry}
        material={materials['mb:o:357:115']}
        position={[-491.856, -3.2, 68.164]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2685.geometry}
        material={materials['mb:o:81:141']}
        position={[-523.903, 0, 36.178]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2686.geometry}
        material={materials['mb:o:81:141']}
        position={[-539.905, 0, 44.172]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2687.geometry}
        material={materials['mb:o:81:141']}
        position={[-547.905, -3.2, 12.175]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2688.geometry}
        material={materials['mb:o:81:330']}
        position={[-539.9, -3.2, 28.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2689.geometry}
        material={materials['mb:o:81:141']}
        position={[-523.867, -3.2, 124.167]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part269.geometry}
        material={materials['mb:o:33:192']}
        position={[-537.619, 87.998, 3.782]}
        rotation={[1.559, 0.428, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2690.geometry}
        material={materials['mb:o:81:141']}
        position={[-547.886, -6.4, 84.186]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2691.geometry}
        material={materials['mb:o:81:330']}
        position={[-523.892, -3.2, 68.178]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2692.geometry}
        material={materials['mb:o:81:141']}
        position={[-539.881, -3.2, 84.172]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2693.geometry}
        material={materials['mb:o:81:141']}
        position={[-531.864, -6.4, 148.18]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2694.geometry}
        material={materials['mb:o:81:141']}
        position={[-531.85, -12.8, 188.18]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2695.geometry}
        material={materials['mb:o:81:119']}
        position={[-571.811, -13.599, 176.185]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2696.geometry}
        material={materials['mb:o:81:119']}
        position={[-571.875, -3.2, 148.2]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2697.geometry}
        material={materials['mb:o:81:199']}
        position={[-571.835, 6.4, 108.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2698.geometry}
        material={materials['mb:o:81:115']}
        position={[-571.027, 7.2, 100.183]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2699.geometry}
        material={materials['mb:o:81:119']}
        position={[-571.007, 7.2, 44.183]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part270.geometry}
        material={materials['mb:o:33:141']}
        position={[-540.272, 93.821, 3.713]}
        rotation={[1.559, 0.428, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2700.geometry}
        material={materials['mb:o:81:115']}
        position={[-563.821, 3.2, 68.186]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2701.geometry}
        material={materials['mb:o:81:119']}
        position={[-575.842, 8.8, 20.168]}
        rotation={[-Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2702.geometry}
        material={materials['mb:o:81:115']}
        position={[-579.853, 6.4, 4.164]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2703.geometry}
        material={materials['mb:o:81:119']}
        position={[-563.844, -12.8, 172.169]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2704.geometry}
        material={materials['mb:o:81:119']}
        position={[-563.881, -3.2, 132.172]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2705.geometry}
        material={materials['mb:o:81:119']}
        position={[-487.839, -10.4, 20.168]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2706.geometry}
        material={materials['mb:o:81:119']}
        position={[-491.831, -6.4, -3.833]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2707.geometry}
        material={materials['mb:o:81:119']}
        position={[-487.858, -10.4, 76.168]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2708.geometry}
        material={materials['mb:o:81:115']}
        position={[-484.65, -15.2, 52.169]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2709.geometry}
        material={materials['mb:o:81:119']}
        position={[-483.9, -9.6, 44.164]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part271.geometry}
        material={materials['mb:o:33:192']}
        position={[-539.298, 30.414, -0.263]}
        rotation={[1.558, 0.467, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2710.geometry}
        material={materials['mb:o:81:119']}
        position={[-491.867, -12.8, 156.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2711.geometry}
        material={materials['mb:o:81:119']}
        position={[-507.87, -6.4, 132.172]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2712.geometry}
        material={materials['mb:o:81:199']}
        position={[-491.875, -12.8, 108.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2713.geometry}
        material={materials['mb:o:81:119']}
        position={[-491.842, -3.2, 28.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2714.geometry}
        material={materials['mb:o:81:119']}
        position={[-507.886, -3.2, 84.172]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2715.geometry}
        material={materials['mb:o:81:119']}
        position={[-491.861, -6.4, 84.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2716.geometry}
        material={materials['mb:o:81:119']}
        position={[-503.821, 5.6, 12.16]}
        rotation={[Math.PI / 2, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2717.geometry}
        material={materials['mb:o:81:115']}
        position={[-499.839, 3.2, 20.164]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2718.geometry}
        material={materials['mb:o:163:119']}
        position={[-571.841, 0, 84.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2719.geometry}
        material={materials['mb:o:163:119']}
        position={[-571.838, 0, 76.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part272.geometry}
        material={materials['mb:o:33:192']}
        position={[-559.357, 32.268, 20.506]}
        rotation={[1.264, -0.008, 1.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2720.geometry}
        material={materials['mb:o:163:115']}
        position={[-571.832, 3.2, 60.183]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2721.geometry}
        material={materials['mb:o:163:115']}
        position={[-579.842, 3.2, 20.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2722.geometry}
        material={materials['mb:o:163:119']}
        position={[-491.845, -12.8, 36.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2723.geometry}
        material={materials['mb:o:163:199']}
        position={[-491.85, -12.8, 52.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2724.geometry}
        material={materials['mb:o:163:119']}
        position={[-491.853, -12.8, 60.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2725.geometry}
        material={materials['mb:o:163:119']}
        position={[-491.856, -12.8, 68.167]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2726.geometry}
        material={materials['mb:o:802:119']}
        position={[-579.834, 0, 120.18]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2727.geometry}
        material={materials['mb:o:802:119']}
        position={[-579.825, 3.2, 96.18]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2728.geometry}
        material={materials['mb:o:802:115']}
        position={[-579.806, 3.2, 40.18]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2729.geometry}
        material={materials['mb:o:802:115']}
        position={[-499.863, -12.8, 144.169]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part273.geometry}
        material={materials['mb:o:33:192']}
        position={[-580.079, 29.068, -1.331]}
        rotation={[1.579, -0.307, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2730.geometry}
        material={materials['mb:o:824:119']}
        position={[-575.813, -12.8, 164.185]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2731.geometry}
        material={materials['mb:o:2340:37']}
        position={[-329.4, 3.2, 42.4]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2732.geometry}
        material={materials['mb:o:1640:21']}
        position={[-325.49, 24.9, 42.4]}
        rotation={[0, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2733.geometry}
        material={materials['mb:o:1001:37']}
        position={[-329.4, 0, 42.4]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2734.geometry}
        material={materials['mb:o:12927:37']}
        position={[-313.4, 3.2, 42.4]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2735.geometry}
        material={materials['mb:o:12927:37']}
        position={[-345.4, 3.2, 42.4]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2736.geometry}
        material={materials['mb:o:12927:37']}
        position={[-336.4, 3.2, 58.8]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2737.geometry}
        material={materials['mb:o:656:37']}
        position={[-345.4, 3.2, 26.4]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2738.geometry}
        material={materials['mb:o:656:37']}
        position={[-329.4, 3.2, 66.4]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2739.geometry}
        material={materials['mb:o:656:37']}
        position={[-313.4, 3.2, 26.4]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part274.geometry}
        material={materials['mb:o:33:192']}
        position={[-538.766, 52.382, 3.752]}
        rotation={[1.559, 0.412, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2740.geometry}
        material={materials['mb:o:4854:37']}
        position={[-359.2, -8.6, 92.8]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2741.geometry}
        material={materials['mb:o:13567:21']}
        position={[-370.577, 0.93, 92.8]}
        rotation={[Math.PI / 2, 1.23, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2742.geometry}
        material={materials['mb:o:13567:353']}
        position={[-353.606, 0.861, 102.491]}
        rotation={[2.755, -0.491, -1.761]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2743.geometry}
        material={materials['mb:o:13567:101']}
        position={[-353.606, 0.861, 83.109]}
        rotation={[0.387, -0.491, 1.761]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2744.geometry}
        material={materials['mb:o:13567:103']}
        position={[-352.428, 6.672, 92.8]}
        rotation={[Math.PI / 2, -0.54, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2745.geometry}
        material={materials['mb:o:13567:6']}
        position={[-362.379, 5.986, 98.309]}
        rotation={[2.05, 0.259, 2.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2746.geometry}
        material={materials['mb:o:13567:100']}
        position={[-362.584, 6.672, 86.934]}
        rotation={[1.091, 0.259, -2.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2747.geometry}
        material={materials['mb:o:4854:37']}
        position={[-327.135, -8.598, 92.952]}
        rotation={[1.595, 0.033, -3.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2748.geometry}
        material={materials['mb:o:13567:322']}
        position={[-316.125, 1.267, 94.262]}
        rotation={[1.834, -1.186, 0.254]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2749.geometry}
        material={materials['mb:o:13567:321']}
        position={[-332.095, 0.946, 83.002]}
        rotation={[0.381, 0.414, 1.452]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part275.geometry}
        material={materials['mb:o:33:192']}
        position={[-563.351, 46.592, 20.225]}
        rotation={[1.122, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2750.geometry}
        material={materials['mb:o:13567:101']}
        position={[-333.924, 0.425, 102.29]}
        rotation={[2.777, 0.591, -1.374]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2751.geometry}
        material={materials['mb:o:13567:103']}
        position={[-334.371, 6.457, 92.672]}
        rotation={[1.537, 0.57, 0.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2752.geometry}
        material={materials['mb:o:13567:6']}
        position={[-323.927, 6.22, 88.121]}
        rotation={[1.144, -0.273, -1.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2753.geometry}
        material={materials['mb:o:13567:208']}
        position={[-324.819, 6.606, 99.476]}
        rotation={[2.091, -0.186, 1.181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2754.geometry}
        material={materials['mb:o:4854:37']}
        position={[-343.2, -8.6, 133]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2755.geometry}
        material={materials['mb:o:13567:21']}
        position={[-331.823, 0.93, 133]}
        rotation={[Math.PI / 2, -1.23, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2756.geometry}
        material={materials['mb:o:13567:110']}
        position={[-348.794, 0.861, 123.309]}
        rotation={[0.387, 0.491, 1.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2757.geometry}
        material={materials['mb:o:13567:195']}
        position={[-348.794, 0.861, 142.691]}
        rotation={[2.755, 0.491, -1.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2758.geometry}
        material={materials['mb:o:13567:232']}
        position={[-349.972, 6.672, 133]}
        rotation={[Math.PI / 2, 0.54, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2759.geometry}
        material={materials['mb:o:13567:6']}
        position={[-340.021, 5.986, 127.491]}
        rotation={[1.091, -0.259, -1.111]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part276.geometry}
        material={materials['mb:o:33:192']}
        position={[-554.244, 46.414, -21.94]}
        rotation={[2, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2760.geometry}
        material={materials['mb:o:13567:100']}
        position={[-339.816, 6.672, 138.866]}
        rotation={[2.05, -0.259, 1.111]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2761.geometry}
        material={materials['mb:o:1001:37']}
        position={[-343.2, -9.8, 109]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2762.geometry}
        material={materials['mb:o:12927:37']}
        position={[-343.2, -8, 109]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2763.geometry}
        material={materials['mb:o:12927:37']}
        position={[-359.2, -8.4, 109]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2764.geometry}
        material={materials['mb:o:4854:37']}
        position={[-519.656, 5.8, 95.456]}
        rotation={[Math.PI / 2, 0, 3.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2765.geometry}
        material={materials['mb:o:13567:21']}
        position={[-508.279, 15.33, 95.357]}
        rotation={[1.546, -1.23, -0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2766.geometry}
        material={materials['mb:o:13567:353']}
        position={[-525.334, 15.261, 85.815]}
        rotation={[0.389, 0.499, 1.377]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2767.geometry}
        material={materials['mb:o:13567:101']}
        position={[-525.165, 15.261, 105.196]}
        rotation={[2.756, 0.483, -1.384]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2768.geometry}
        material={materials['mb:o:13567:103']}
        position={[-526.428, 21.072, 95.515]}
        rotation={[1.576, 0.54, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2769.geometry}
        material={materials['mb:o:13567:6']}
        position={[-516.525, 20.386, 89.92]}
        rotation={[1.089, -0.255, -1.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part277.geometry}
        material={materials['mb:o:33:141']}
        position={[-537.844, 126.636, 3.777]}
        rotation={[1.558, 0.454, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2770.geometry}
        material={materials['mb:o:13567:100']}
        position={[-516.221, 21.072, 101.292]}
        rotation={[2.048, -0.263, 1.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2771.geometry}
        material={materials['mb:o:4854:37']}
        position={[-551.721, 5.802, 95.584]}
        rotation={[1.547, -0.032, 0.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2772.geometry}
        material={materials['mb:o:13567:322']}
        position={[-562.742, 15.667, 94.37]}
        rotation={[1.329, 1.188, -2.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2773.geometry}
        material={materials['mb:o:13567:321']}
        position={[-546.675, 15.346, 105.491]}
        rotation={[2.759, -0.423, -1.693]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2774.geometry}
        material={materials['mb:o:13567:101']}
        position={[-545.014, 14.825, 86.187]}
        rotation={[0.363, -0.582, 1.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2775.geometry}
        material={materials['mb:o:13567:103']}
        position={[-544.483, 20.857, 95.801]}
        rotation={[1.599, -0.571, -3.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2776.geometry}
        material={materials['mb:o:13567:6']}
        position={[-554.886, 20.62, 100.443]}
        rotation={[2, 0.269, 2.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2777.geometry}
        material={materials['mb:o:13567:208']}
        position={[-554.094, 21.006, 89.08]}
        rotation={[1.052, 0.19, -1.969]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2778.geometry}
        material={materials['mb:o:4854:37']}
        position={[-536.006, 5.8, 55.397]}
        rotation={[Math.PI / 2, 0, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2779.geometry}
        material={materials['mb:o:13567:21']}
        position={[-547.383, 15.33, 55.497]}
        rotation={[1.595, 1.23, 3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part278.geometry}
        material={materials['mb:o:33:141']}
        position={[-563.35, 123.436, 20.183]}
        rotation={[1.117, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2780.geometry}
        material={materials['mb:o:13567:110']}
        position={[-530.328, 15.261, 65.039]}
        rotation={[2.753, -0.499, -1.765]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2781.geometry}
        material={materials['mb:o:13567:195']}
        position={[-530.497, 15.261, 45.658]}
        rotation={[0.385, -0.483, 1.758]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2782.geometry}
        material={materials['mb:o:13567:232']}
        position={[-529.234, 21.072, 55.338]}
        rotation={[1.566, -0.54, 3.131]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2783.geometry}
        material={materials['mb:o:13567:6']}
        position={[-539.137, 20.386, 60.934]}
        rotation={[2.053, 0.255, 2.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2784.geometry}
        material={materials['mb:o:13567:100']}
        position={[-539.441, 21.072, 49.561]}
        rotation={[1.093, 0.263, -2.039]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2785.geometry}
        material={materials['mb:o:1001:37']}
        position={[-535.797, 4.6, 79.396]}
        rotation={[Math.PI / 2, 0, 3.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2786.geometry}
        material={materials['mb:o:12927:37']}
        position={[-535.797, 6.4, 79.396]}
        rotation={[Math.PI / 2, 0, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2787.geometry}
        material={materials['mb:o:12927:37']}
        position={[-519.797, 6, 79.257]}
        rotation={[Math.PI / 2, 0, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2788.geometry}
        material={materials['mb:o:4854:37']}
        position={[-508.781, 0.4, 172.764]}
        rotation={[Math.PI / 2, 0, 3.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2789.geometry}
        material={materials['mb:o:13567:21']}
        position={[-497.404, 9.93, 172.665]}
        rotation={[1.546, -1.23, -0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part279.geometry}
        material={materials['mb:o:33:141']}
        position={[-563.277, 129.189, 17.379]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2790.geometry}
        material={materials['mb:o:13567:353']}
        position={[-514.459, 9.861, 163.123]}
        rotation={[0.389, 0.499, 1.377]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2791.geometry}
        material={materials['mb:o:13567:101']}
        position={[-514.29, 9.861, 182.504]}
        rotation={[2.756, 0.483, -1.384]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2792.geometry}
        material={materials['mb:o:13567:103']}
        position={[-515.553, 15.672, 172.823]}
        rotation={[1.576, 0.54, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2793.geometry}
        material={materials['mb:o:13567:21']}
        position={[-505.65, 14.986, 167.228]}
        rotation={[1.089, -0.255, -1.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2794.geometry}
        material={materials['mb:o:13567:100']}
        position={[-505.345, 15.672, 178.6]}
        rotation={[2.048, -0.263, 1.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2795.geometry}
        material={materials['mb:o:4854:37']}
        position={[-540.846, 0.402, 172.892]}
        rotation={[1.547, -0.032, 0.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2796.geometry}
        material={materials['mb:o:13567:216']}
        position={[-551.867, 10.267, 171.678]}
        rotation={[1.329, 1.188, -2.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2797.geometry}
        material={materials['mb:o:13567:21']}
        position={[-535.799, 9.946, 182.799]}
        rotation={[2.759, -0.423, -1.693]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2798.geometry}
        material={materials['mb:o:13567:101']}
        position={[-534.139, 9.425, 163.495]}
        rotation={[0.363, -0.582, 1.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2799.geometry}
        material={materials['mb:o:13567:103']}
        position={[-533.608, 15.457, 173.109]}
        rotation={[1.599, -0.571, -3.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part280.geometry}
        material={materials['mb:o:33:28']}
        position={[-579.756, 126.636, -5.324]}
        rotation={[1.584, -0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2800.geometry}
        material={materials['mb:o:13567:6']}
        position={[-544.011, 15.22, 177.751]}
        rotation={[2, 0.269, 2.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2801.geometry}
        material={materials['mb:o:13567:208']}
        position={[-543.219, 15.606, 166.388]}
        rotation={[1.052, 0.19, -1.969]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2802.geometry}
        material={materials['mb:o:4854:37']}
        position={[-525.131, 0.4, 132.705]}
        rotation={[Math.PI / 2, 0, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2803.geometry}
        material={materials['mb:o:13567:21']}
        position={[-536.508, 9.93, 132.805]}
        rotation={[1.595, 1.23, 3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2804.geometry}
        material={materials['mb:o:13567:216']}
        position={[-519.653, 9.661, 142.547]}
        rotation={[2.753, -0.499, -1.765]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2805.geometry}
        material={materials['mb:o:13567:195']}
        position={[-519.622, 9.861, 122.966]}
        rotation={[0.385, -0.483, 1.758]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2806.geometry}
        material={materials['mb:o:13567:21']}
        position={[-518.359, 15.672, 132.646]}
        rotation={[1.566, -0.54, 3.131]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2807.geometry}
        material={materials['mb:o:13567:6']}
        position={[-528.262, 14.986, 138.242]}
        rotation={[2.053, 0.255, 2.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2808.geometry}
        material={materials['mb:o:13567:100']}
        position={[-528.566, 15.672, 126.869]}
        rotation={[1.093, 0.263, -2.039]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2809.geometry}
        material={materials['mb:o:1001:37']}
        position={[-524.922, -0.8, 156.705]}
        rotation={[Math.PI / 2, 0, 3.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part281.geometry}
        material={materials['mb:o:33:192']}
        position={[-537.619, 68.798, 3.782]}
        rotation={[1.559, 0.428, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2810.geometry}
        material={materials['mb:o:12927:37']}
        position={[-524.922, 1, 156.705]}
        rotation={[Math.PI / 2, 0, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2811.geometry}
        material={materials['mb:o:12927:37']}
        position={[-508.922, 0.6, 156.565]}
        rotation={[Math.PI / 2, 0, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2812.geometry}
        material={materials['mb:o:4854:37']}
        position={[-327.103, -5.264, 212.18]}
        rotation={[Math.PI / 2, 0, 3.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2813.geometry}
        material={materials['mb:o:13567:21']}
        position={[-315.726, 4.266, 212.081]}
        rotation={[1.546, -1.23, -0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2814.geometry}
        material={materials['mb:o:13567:353']}
        position={[-332.782, 4.197, 202.539]}
        rotation={[0.389, 0.499, 1.377]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2815.geometry}
        material={materials['mb:o:13567:101']}
        position={[-332.612, 4.197, 221.92]}
        rotation={[2.756, 0.483, -1.384]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2816.geometry}
        material={materials['mb:o:13567:103']}
        position={[-333.875, 10.008, 212.239]}
        rotation={[1.576, 0.54, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2817.geometry}
        material={materials['mb:o:13567:21']}
        position={[-323.972, 9.322, 206.644]}
        rotation={[1.089, -0.255, -1.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2818.geometry}
        material={materials['mb:o:13567:100']}
        position={[-323.668, 10.008, 218.016]}
        rotation={[2.048, -0.263, 1.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2819.geometry}
        material={materials['mb:o:4854:37']}
        position={[-359.168, -5.262, 212.308]}
        rotation={[1.547, -0.032, 0.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part282.geometry}
        material={materials['mb:o:33:192']}
        position={[-554.238, 65.364, -22.165]}
        rotation={[1.973, 0.01, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2820.geometry}
        material={materials['mb:o:13567:216']}
        position={[-370.189, 4.603, 211.094]}
        rotation={[1.329, 1.188, -2.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2821.geometry}
        material={materials['mb:o:13567:21']}
        position={[-354.122, 4.282, 222.215]}
        rotation={[2.759, -0.423, -1.693]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2822.geometry}
        material={materials['mb:o:13567:101']}
        position={[-352.461, 3.762, 202.912]}
        rotation={[0.363, -0.582, 1.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2823.geometry}
        material={materials['mb:o:13567:103']}
        position={[-351.93, 9.793, 212.525]}
        rotation={[1.599, -0.571, -3.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2824.geometry}
        material={materials['mb:o:13567:6']}
        position={[-362.334, 9.556, 217.167]}
        rotation={[2, 0.269, 2.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2825.geometry}
        material={materials['mb:o:13567:208']}
        position={[-361.541, 9.942, 205.804]}
        rotation={[1.052, 0.19, -1.969]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2826.geometry}
        material={materials['mb:o:4854:37']}
        position={[-343.453, -5.264, 172.122]}
        rotation={[Math.PI / 2, 0, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2827.geometry}
        material={materials['mb:o:13567:21']}
        position={[-354.83, 4.266, 172.221]}
        rotation={[1.595, 1.23, 3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2828.geometry}
        material={materials['mb:o:13567:216']}
        position={[-337.975, 3.997, 181.963]}
        rotation={[2.753, -0.499, -1.765]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2829.geometry}
        material={materials['mb:o:13567:195']}
        position={[-337.944, 4.197, 162.382]}
        rotation={[0.385, -0.483, 1.758]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part283.geometry}
        material={materials['mb:o:33:192']}
        position={[-580.115, 68.65, -5.333]}
        rotation={[1.582, -0.412, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2830.geometry}
        material={materials['mb:o:13567:21']}
        position={[-336.681, 10.008, 172.062]}
        rotation={[1.566, -0.54, 3.131]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2831.geometry}
        material={materials['mb:o:13567:6']}
        position={[-346.584, 9.322, 177.658]}
        rotation={[2.053, 0.255, 2.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2832.geometry}
        material={materials['mb:o:13567:100']}
        position={[-346.889, 10.008, 166.286]}
        rotation={[1.093, 0.263, -2.039]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2833.geometry}
        material={materials['mb:o:1001:37']}
        position={[-343.244, -6.464, 196.121]}
        rotation={[Math.PI / 2, 0, 3.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2834.geometry}
        material={materials['mb:o:12927:37']}
        position={[-343.244, -4.664, 196.121]}
        rotation={[Math.PI / 2, 0, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2835.geometry}
        material={materials['mb:o:12927:37']}
        position={[-327.245, -5.064, 195.981]}
        rotation={[Math.PI / 2, 0, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2836.geometry}
        material={materials['mb:o:1294:119']}
        position={[-395.931, 12.8, 309.767]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2837.geometry}
        material={materials['mb:o:1294:119']}
        position={[-475.97, -3.2, 293.761]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2838.geometry}
        material={materials['mb:o:2907:199']}
        position={[-403.952, 3.2, 265.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2839.geometry}
        material={materials['mb:o:2907:119']}
        position={[-403.971, 9.6, 321.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part284.geometry}
        material={materials['mb:o:33:192']}
        position={[-563.356, 65.614, 20.392]}
        rotation={[1.141, -0.011, 1.595]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2840.geometry}
        material={materials['mb:o:2907:119']}
        position={[-483.953, -12.8, 377.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2841.geometry}
        material={materials['mb:o:2907:119']}
        position={[-475.953, -6.4, 377.772]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2842.geometry}
        material={materials['mb:o:2907:119']}
        position={[-483.914, -12.8, 241.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2843.geometry}
        material={materials['mb:o:2907:115']}
        position={[-484.723, -8.8, 233.764]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2844.geometry}
        material={materials['mb:o:1642:138']}
        position={[-475.923, -19.2, 185.775]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2845.geometry}
        material={materials['mb:o:217:138']}
        position={[-439.922, -12.8, 189.754]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2846.geometry}
        material={materials['mb:o:3678:119']}
        position={[-483.95, 0, 369.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2847.geometry}
        material={materials['mb:o:150:308']}
        position={[-407.914, -16, 373.754]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2848.geometry}
        material={materials['mb:o:150:308']}
        position={[-439.914, -16, 333.754]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2849.geometry}
        material={materials['mb:o:150:308']}
        position={[-399.95, -16, 269.751]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part285.geometry}
        material={materials['mb:o:33:141']}
        position={[-554.25, 123.436, -21.73]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2850.geometry}
        material={materials['mb:o:63:119']}
        position={[-403.938, 0, 305.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2851.geometry}
        material={materials['mb:o:63:119']}
        position={[-403.932, 0, 321.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2852.geometry}
        material={materials['mb:o:63:119']}
        position={[-483.884, -12.8, 329.769]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2853.geometry}
        material={materials['mb:o:63:115']}
        position={[-475.906, -12.8, 265.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2854.geometry}
        material={materials['mb:o:332:308']}
        position={[-399.931, -16, 325.751]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2855.geometry}
        material={materials['mb:o:358:308']}
        position={[-475.877, -16, 349.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2856.geometry}
        material={materials['mb:o:67:138']}
        position={[-423.917, -16, 205.743]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2857.geometry}
        material={materials['mb:o:67:308']}
        position={[-399.961, -12.8, 237.751]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2858.geometry}
        material={materials['mb:o:67:308']}
        position={[-399.961, -9.6, 237.751]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2859.geometry}
        material={materials['mb:o:281:138']}
        position={[-475.917, -19.2, 173.742]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part286.geometry}
        material={materials['mb:o:291:192']}
        position={[-554.801, 128.174, -0.669]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2860.geometry}
        material={materials['mb:o:281:138']}
        position={[-455.915, -19.2, 169.749]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2861.geometry}
        material={materials['mb:o:281:119']}
        position={[-487.931, -11.2, 313.768]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2862.geometry}
        material={materials['mb:o:281:119']}
        position={[-479.948, -6.4, 361.771]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2863.geometry}
        material={materials['mb:o:45:138']}
        position={[-455.922, -12.8, 189.749]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2864.geometry}
        material={materials['mb:o:33:27']}
        position={[-447.879, -3.2, 345.757]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2865.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.887, 0, 321.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2866.geometry}
        material={materials['mb:o:33:138']}
        position={[-443.891, 0, 333.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2867.geometry}
        material={materials['mb:o:33:138']}
        position={[-443.899, 0, 357.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2868.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.903, 0, 369.754]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2869.geometry}
        material={materials['mb:o:33:138']}
        position={[-427.902, -3.2, 373.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part287.geometry}
        material={materials['mb:o:35:192']}
        position={[-562.694, 137.774, -4.877]}
        rotation={[Math.PI / 2, 0, -0.717]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2870.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.894, 0, 341.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2871.geometry}
        material={materials['mb:o:33:138']}
        position={[-427.877, -3.2, 349.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2872.geometry}
        material={materials['mb:o:33:138']}
        position={[-435.897, -6.4, 221.756]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2873.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.897, -6.4, 221.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2874.geometry}
        material={materials['mb:o:33:138']}
        position={[-455.914, -6.4, 241.76]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2875.geometry}
        material={materials['mb:o:33:138']}
        position={[-419.91, -6.4, 229.772]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2876.geometry}
        material={materials['mb:o:33:138']}
        position={[-451.908, -6.4, 261.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2877.geometry}
        material={materials['mb:o:33:138']}
        position={[-427.902, -6.4, 277.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2878.geometry}
        material={materials['mb:o:33:138']}
        position={[-455.892, -6.4, 305.76]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2879.geometry}
        material={materials['mb:o:33:138']}
        position={[-435.916, -3.2, 277.756]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part288.geometry}
        material={materials['mb:o:35:192']}
        position={[-554.906, 137.774, 3.33]}
        rotation={[Math.PI / 2, 0, -0.741]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2880.geometry}
        material={materials['mb:o:33:330']}
        position={[-411.916, -3.2, 277.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2881.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.916, -3.2, 277.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2882.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.924, -3.2, 301.745]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2883.geometry}
        material={materials['mb:o:33:25']}
        position={[-455.89, -12.8, 201.749]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2884.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.89, -12.8, 201.754]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2885.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.906, -6.4, 265.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2886.geometry}
        material={materials['mb:o:33:138']}
        position={[-423.909, -6.4, 257.76]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2887.geometry}
        material={materials['mb:o:33:138']}
        position={[-435.908, -6.4, 253.756]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2888.geometry}
        material={materials['mb:o:33:138']}
        position={[-419.908, -9.6, 221.772]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2889.geometry}
        material={materials['mb:o:33:138']}
        position={[-459.891, -9.6, 205.747]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part289.geometry}
        material={materials['mb:o:155:192']}
        position={[-558.8, 32.174, -0.774]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2890.geometry}
        material={materials['mb:o:33:138']}
        position={[-423.89, -12.8, 201.76]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2891.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.919, -12.8, 197.772]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2892.geometry}
        material={materials['mb:o:33:138']}
        position={[-423.926, -19.2, 177.757]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2893.geometry}
        material={materials['mb:o:33:27']}
        position={[-427.925, -16, 181.758]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2894.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.902, 0, 365.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2895.geometry}
        material={materials['mb:o:33:138']}
        position={[-403.905, -3.2, 373.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2896.geometry}
        material={materials['mb:o:33:330']}
        position={[-411.897, -6.4, 221.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2897.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.905, -6.4, 245.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2898.geometry}
        material={materials['mb:o:33:119']}
        position={[-395.97, -9.6, 213.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2899.geometry}
        material={materials['mb:o:33:115']}
        position={[-399.973, -13.6, 204.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part290.geometry}
        material={materials['mb:o:155:192']}
        position={[-558.8, 51.374, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2900.geometry}
        material={materials['mb:o:33:308']}
        position={[-399.968, -12.8, 217.751]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2901.geometry}
        material={materials['mb:o:33:119']}
        position={[-395.967, -6.4, 221.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2902.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.961, -3.2, 237.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2903.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.95, -3.2, 269.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2904.geometry}
        material={materials['mb:o:33:119']}
        position={[-401.55, 4, 253.754]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2905.geometry}
        material={materials['mb:o:33:119']}
        position={[-404.75, 4, 253.753]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2906.geometry}
        material={materials['mb:o:33:119']}
        position={[-395.967, 3.2, 261.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2907.geometry}
        material={materials['mb:o:33:119']}
        position={[-399.96, 0, 241.751]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2908.geometry}
        material={materials['mb:o:33:119']}
        position={[-407.945, 5.6, 293.751]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2909.geometry}
        material={materials['mb:o:33:115']}
        position={[-403.945, 9.6, 293.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part291.geometry}
        material={materials['mb:o:155:192']}
        position={[-558.8, 70.574, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2910.geometry}
        material={materials['mb:o:33:119']}
        position={[-401.559, 7.2, 277.754]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2911.geometry}
        material={materials['mb:o:33:115']}
        position={[-401.578, 7.2, 333.754]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2912.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.927, -3.2, 309.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2913.geometry}
        material={materials['mb:o:33:138']}
        position={[-427.891, -6.4, 309.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2914.geometry}
        material={materials['mb:o:33:138']}
        position={[-419.894, -6.4, 301.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2915.geometry}
        material={materials['mb:o:33:119']}
        position={[-399.939, 3.2, 345.768]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2916.geometry}
        material={materials['mb:o:33:138']}
        position={[-403.897, 0, 373.761]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2917.geometry}
        material={materials['mb:o:33:119']}
        position={[-399.939, 6.4, 345.768]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2918.geometry}
        material={materials['mb:o:33:119']}
        position={[-395.93, 3.2, 373.772]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2919.geometry}
        material={materials['mb:o:33:119']}
        position={[-395.934, 3.2, 317.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part292.geometry}
        material={materials['mb:o:155:192']}
        position={[-558.8, 89.774, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2920.geometry}
        material={materials['mb:o:33:115']}
        position={[-487.921, -10.4, 285.768]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2921.geometry}
        material={materials['mb:o:33:119']}
        position={[-491.132, -7.2, 317.767]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2922.geometry}
        material={materials['mb:o:33:115']}
        position={[-487.884, -16, 329.771]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2923.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.93, -19.2, 197.769]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2924.geometry}
        material={materials['mb:o:33:115']}
        position={[-483.927, -16, 205.769]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2925.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.919, -12.8, 205.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2926.geometry}
        material={materials['mb:o:33:115']}
        position={[-481.521, -8.8, 229.765]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2927.geometry}
        material={materials['mb:o:33:119']}
        position={[-467.919, -3.2, 229.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2928.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.913, -16, 245.769]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2929.geometry}
        material={materials['mb:o:33:115']}
        position={[-483.908, -16, 261.769]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part293.geometry}
        material={materials['mb:o:155:192']}
        position={[-558.8, 108.974, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2930.geometry}
        material={materials['mb:o:33:119']}
        position={[-479.914, -9.6, 241.771]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2931.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.916, -6.4, 237.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2932.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.91, -9.6, 253.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2933.geometry}
        material={materials['mb:o:33:119']}
        position={[-479.942, -6.4, 345.771]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2934.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.891, -9.6, 309.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2935.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.883, -6.4, 333.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2936.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.97, -3.2, 285.761]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2937.geometry}
        material={materials['mb:o:33:119']}
        position={[-467.885, -3.2, 325.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2938.geometry}
        material={materials['mb:o:33:119']}
        position={[-487.95, -10.4, 369.768]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2939.geometry}
        material={materials['mb:o:33:119']}
        position={[-467.952, -3.2, 373.775]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part294.geometry}
        material={materials['mb:o:3:192']}
        position={[-577.67, 45.027, -5.269]}
        rotation={[1.583, -0.428, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2940.geometry}
        material={materials['mb:o:33:119']}
        position={[-463.953, 0, 377.776]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2941.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.95, 3.2, 369.772]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2942.geometry}
        material={materials['mb:o:33:138']}
        position={[-439.903, -6.4, 241.754]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2943.geometry}
        material={materials['mb:o:33:119']}
        position={[-479.974, -6.4, 297.76]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2944.geometry}
        material={materials['mb:o:33:115']}
        position={[-395.967, -6.4, 221.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2945.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.891, -19.2, 197.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2946.geometry}
        material={materials['mb:o:354:138']}
        position={[-443.89, -9.6, 201.753]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2947.geometry}
        material={materials['mb:o:354:138']}
        position={[-435.923, -9.6, 193.756]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2948.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.973, -13.599, 200.951]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2949.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.963, 3.2, 249.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part295.geometry}
        material={materials['mb:o:3:192']}
        position={[-576.343, 47.939, -5.234]}
        rotation={[1.583, -0.428, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2950.geometry}
        material={materials['mb:o:354:199']}
        position={[-395.963, 0, 233.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2951.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.952, 0, 265.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2952.geometry}
        material={materials['mb:o:354:119']}
        position={[-404.76, 7.2, 281.753]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2953.geometry}
        material={materials['mb:o:354:119']}
        position={[-404.779, 7.2, 337.753]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2954.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.952, 0, 313.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2955.geometry}
        material={materials['mb:o:354:119']}
        position={[-407.952, 8.8, 313.751]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2956.geometry}
        material={materials['mb:o:354:138']}
        position={[-411.926, 0, 305.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2957.geometry}
        material={materials['mb:o:354:138']}
        position={[-419.892, -3.2, 305.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2958.geometry}
        material={materials['mb:o:354:330']}
        position={[-411.887, 0, 321.745]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2959.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.939, 0, 345.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part296.geometry}
        material={materials['mb:o:3:192']}
        position={[-562.694, 128.174, -4.877]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2960.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.913, 0, 377.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2961.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.919, 3.2, 361.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2962.geometry}
        material={materials['mb:o:354:199']}
        position={[-395.919, 6.4, 361.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2963.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.938, 9.6, 305.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2964.geometry}
        material={materials['mb:o:354:115']}
        position={[-395.927, 6.4, 337.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2965.geometry}
        material={materials['mb:o:354:308']}
        position={[-483.953, -16, 377.769]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2966.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.953, -9.6, 377.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2967.geometry}
        material={materials['mb:o:354:115']}
        position={[-487.942, -10.4, 345.768]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2968.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.939, -16, 337.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2969.geometry}
        material={materials['mb:o:354:115']}
        position={[-491.884, -12.8, 329.772]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part297.geometry}
        material={materials['mb:o:3:192']}
        position={[-562.694, 131.374, -4.877]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2970.geometry}
        material={materials['mb:o:354:115']}
        position={[-487.939, -7.2, 337.768]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2971.geometry}
        material={materials['mb:o:354:199']}
        position={[-483.926, -12.8, 209.769]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2972.geometry}
        material={materials['mb:o:354:115']}
        position={[-484.72, -8.8, 225.764]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2973.geometry}
        material={materials['mb:o:354:115']}
        position={[-487.923, -8.8, 233.762]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2974.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.923, -16, 217.769]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2975.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.923, -12.8, 217.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2976.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.923, -6.4, 217.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2977.geometry}
        material={materials['mb:o:354:217']}
        position={[-467.917, -6.4, 233.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2978.geometry}
        material={materials['mb:o:354:115']}
        position={[-483.909, -12.8, 257.769]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2979.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.966, 0, 353.778]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part298.geometry}
        material={materials['mb:o:3:192']}
        position={[-562.694, 134.574, -4.877]}
        rotation={[Math.PI / 2, 0, -2.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2980.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.888, -3.2, 317.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2981.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.966, -3.2, 353.775]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2982.geometry}
        material={materials['mb:o:354:119']}
        position={[-467.89, -3.2, 313.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2983.geometry}
        material={materials['mb:o:354:217']}
        position={[-459.917, -9.6, 233.761]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2984.geometry}
        material={materials['mb:o:354:115']}
        position={[-483.92, -6.4, 281.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2985.geometry}
        material={materials['mb:o:354:115']}
        position={[-479.963, 5.6, 361.779]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2986.geometry}
        material={materials['mb:o:354:119']}
        position={[-487.948, -9.6, 361.768]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2987.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.95, -3.2, 369.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2988.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.953, -3.2, 377.772]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2989.geometry}
        material={materials['mb:o:354:119']}
        position={[-395.946, 12.8, 281.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part299.geometry}
        material={materials['mb:o:3:192']}
        position={[-554.906, 131.374, 3.33]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2990.geometry}
        material={materials['mb:o:274:119']}
        position={[-463.91, -19.2, 253.762]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2991.geometry}
        material={materials['mb:o:274:308']}
        position={[-415.91, -19.2, 253.746]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2992.geometry}
        material={materials['mb:o:400:138']}
        position={[-439.885, -3.2, 325.754]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2993.geometry}
        material={materials['mb:o:400:138']}
        position={[-447.872, -3.2, 365.757]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2994.geometry}
        material={materials['mb:o:400:138']}
        position={[-439.921, -9.6, 221.754]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2995.geometry}
        material={materials['mb:o:400:138']}
        position={[-447.899, -6.4, 285.757]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2996.geometry}
        material={materials['mb:o:356:308']}
        position={[-463.88, -19.2, 341.762]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2997.geometry}
        material={materials['mb:o:356:308']}
        position={[-415.88, -19.2, 341.746]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2998.geometry}
        material={materials['mb:o:38:138']}
        position={[-447.925, -19.2, 197.751]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2999.geometry}
        material={materials['mb:o:369:138']}
        position={[-447.928, -16, 205.751]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part300.geometry}
        material={materials['mb:o:3:192']}
        position={[-554.906, 134.574, 3.33]}
        rotation={[Math.PI / 2, 0, -1.527]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3000.geometry}
        material={materials['mb:o:223:25']}
        position={[-439.919, -12.8, 229.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3001.geometry}
        material={materials['mb:o:36:119']}
        position={[-483.946, -16, 357.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3002.geometry}
        material={materials['mb:o:36:119']}
        position={[-483.921, -16, 285.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3003.geometry}
        material={materials['mb:o:64:138']}
        position={[-419.883, -3.2, 333.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3004.geometry}
        material={materials['mb:o:64:138']}
        position={[-459.883, -3.2, 333.761]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3005.geometry}
        material={materials['mb:o:64:138']}
        position={[-427.885, 0, 325.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3006.geometry}
        material={materials['mb:o:64:138']}
        position={[-451.885, 0, 325.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3007.geometry}
        material={materials['mb:o:64:138']}
        position={[-419.874, -3.2, 357.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3008.geometry}
        material={materials['mb:o:64:138']}
        position={[-451.919, -6.4, 229.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3009.geometry}
        material={materials['mb:o:64:138']}
        position={[-459.921, -9.6, 221.761]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part301.geometry}
        material={materials['mb:o:3:192']}
        position={[-575.411, 108.366, 2.793]}
        rotation={[1.582, -0.409, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3010.geometry}
        material={materials['mb:o:64:138']}
        position={[-459.91, -6.4, 253.761]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3011.geometry}
        material={materials['mb:o:64:138']}
        position={[-419.899, -6.4, 285.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3012.geometry}
        material={materials['mb:o:64:27']}
        position={[-439.892, -6.4, 305.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3013.geometry}
        material={materials['mb:o:64:138']}
        position={[-451.897, -3.2, 293.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3014.geometry}
        material={materials['mb:o:64:27']}
        position={[-443.91, -6.4, 253.756]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3015.geometry}
        material={materials['mb:o:64:138']}
        position={[-423.928, -6.4, 241.757]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3016.geometry}
        material={materials['mb:o:64:138']}
        position={[-443.924, -6.4, 213.756]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3017.geometry}
        material={materials['mb:o:64:138']}
        position={[-431.928, -9.6, 201.751]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3018.geometry}
        material={materials['mb:o:64:138']}
        position={[-427.922, -12.8, 189.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3019.geometry}
        material={materials['mb:o:64:138']}
        position={[-471.926, -16, 177.773]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part302.geometry}
        material={materials['mb:o:3:141']}
        position={[-555.222, 105.36, 15.396]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3020.geometry}
        material={materials['mb:o:64:138']}
        position={[-423.92, -6.4, 265.757]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3021.geometry}
        material={materials['mb:o:64:119']}
        position={[-403.924, -3.2, 253.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3022.geometry}
        material={materials['mb:o:64:119']}
        position={[-403.948, 0, 277.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3023.geometry}
        material={materials['mb:o:64:119']}
        position={[-403.928, 0, 333.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3024.geometry}
        material={materials['mb:o:64:138']}
        position={[-403.874, 0, 357.742]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3025.geometry}
        material={materials['mb:o:64:119']}
        position={[-483.919, -16, 229.769]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3026.geometry}
        material={materials['mb:o:64:119']}
        position={[-475.883, -3.2, 333.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3027.geometry}
        material={materials['mb:o:104:138']}
        position={[-419.89, -6.4, 313.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3028.geometry}
        material={materials['mb:o:104:119']}
        position={[-395.96, 3.2, 241.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3029.geometry}
        material={materials['mb:o:104:119']}
        position={[-403.963, 0, 233.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part303.geometry}
        material={materials['mb:o:3:141']}
        position={[-542.631, 108.56, -4.351]}
        rotation={[1.558, 0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3030.geometry}
        material={materials['mb:o:104:138']}
        position={[-411.93, 0, 329.756]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3031.geometry}
        material={materials['mb:o:104:138']}
        position={[-411.928, 0, 313.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3032.geometry}
        material={materials['mb:o:104:138']}
        position={[-411.92, -3.2, 289.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3033.geometry}
        material={materials['mb:o:104:119']}
        position={[-395.941, 9.6, 297.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3034.geometry}
        material={materials['mb:o:104:115']}
        position={[-395.924, 9.6, 345.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3035.geometry}
        material={materials['mb:o:104:119']}
        position={[-491.128, -7.2, 305.767]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3036.geometry}
        material={materials['mb:o:104:119']}
        position={[-491.131, -15.2, 313.767]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3037.geometry}
        material={materials['mb:o:104:115']}
        position={[-475.926, -6.4, 225.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3038.geometry}
        material={materials['mb:o:104:119']}
        position={[-483.931, -3.2, 313.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3039.geometry}
        material={materials['mb:o:104:119']}
        position={[-475.928, -6.4, 305.772]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part304.geometry}
        material={materials['mb:o:3:192']}
        position={[-562.378, 105.36, -16.943]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3040.geometry}
        material={materials['mb:o:104:138']}
        position={[-467.945, -3.2, 361.745]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3041.geometry}
        material={materials['mb:o:104:115']}
        position={[-483.948, -3.2, 361.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3042.geometry}
        material={materials['mb:o:9639:138']}
        position={[-439.917, -19.2, 173.754]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3043.geometry}
        material={materials['mb:o:203:138']}
        position={[-411.877, -3.2, 349.745]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3044.geometry}
        material={materials['mb:o:203:308']}
        position={[-395.923, -3.2, 349.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3045.geometry}
        material={materials['mb:o:203:138']}
        position={[-467.899, -6.4, 285.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3046.geometry}
        material={materials['mb:o:203:138']}
        position={[-411.899, -6.4, 285.745]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3047.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.912, -16, 249.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3048.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.909, -16, 257.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3049.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.909, -12.8, 257.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part305.geometry}
        material={materials['mb:o:3:192']}
        position={[-554.302, 80.052, -19.74]}
        rotation={[1.973, 0.01, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3050.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.89, -12.8, 313.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3051.geometry}
        material={materials['mb:o:203:25']}
        position={[-439.89, -16, 313.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3052.geometry}
        material={materials['mb:o:203:119']}
        position={[-403.937, -3.2, 309.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3053.geometry}
        material={materials['mb:o:203:119']}
        position={[-395.926, 0, 341.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3054.geometry}
        material={materials['mb:o:203:308']}
        position={[-475.899, -16, 285.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3055.geometry}
        material={materials['mb:o:2:138']}
        position={[-443.92, -3.2, 289.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3056.geometry}
        material={materials['mb:o:2:138']}
        position={[-411.887, -16, 209.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3057.geometry}
        material={materials['mb:o:2:138']}
        position={[-403.942, -3.2, 353.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3058.geometry}
        material={materials['mb:o:2:119']}
        position={[-395.955, -3.2, 257.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3059.geometry}
        material={materials['mb:o:2:119']}
        position={[-395.96, -6.4, 241.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part306.geometry}
        material={materials['mb:o:3:192']}
        position={[-563.295, 80.239, 18.089]}
        rotation={[1.141, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3060.geometry}
        material={materials['mb:o:2:119']}
        position={[-403.971, -9.6, 209.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3061.geometry}
        material={materials['mb:o:2:330']}
        position={[-403.96, -6.4, 241.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3062.geometry}
        material={materials['mb:o:2:119']}
        position={[-395.963, -3.2, 233.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3063.geometry}
        material={materials['mb:o:2:119']}
        position={[-395.941, 3.2, 297.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3064.geometry}
        material={materials['mb:o:2:119']}
        position={[-395.932, 12.8, 321.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3065.geometry}
        material={materials['mb:o:2:119']}
        position={[-483.931, -16, 313.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3066.geometry}
        material={materials['mb:o:2:119']}
        position={[-475.914, -16, 241.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3067.geometry}
        material={materials['mb:o:2:115']}
        position={[-475.912, -12.8, 249.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3068.geometry}
        material={materials['mb:o:2:119']}
        position={[-475.968, -6.4, 281.778]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3069.geometry}
        material={materials['mb:o:2:138']}
        position={[-467.939, -3.2, 345.745]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part307.geometry}
        material={materials['mb:o:3:192']}
        position={[-577.731, 83.316, -5.271]}
        rotation={[1.582, -0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3070.geometry}
        material={materials['mb:o:2:115']}
        position={[-403.968, -6.4, 217.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3071.geometry}
        material={materials['mb:o:37:119']}
        position={[-395.942, -3.2, 293.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3072.geometry}
        material={materials['mb:o:37:138']}
        position={[-467.919, -9.6, 229.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3073.geometry}
        material={materials['mb:o:37:138']}
        position={[-439.921, -19.2, 185.754]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3074.geometry}
        material={materials['mb:o:37:115']}
        position={[-411.919, -9.6, 229.745]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3075.geometry}
        material={materials['mb:o:37:119']}
        position={[-395.945, 0, 285.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3076.geometry}
        material={materials['mb:o:37:119']}
        position={[-395.972, 6.4, 277.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3077.geometry}
        material={materials['mb:o:37:308']}
        position={[-475.897, -12.8, 293.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3078.geometry}
        material={materials['mb:o:210:138']}
        position={[-447.89, -6.4, 313.757]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3079.geometry}
        material={materials['mb:o:210:115']}
        position={[-395.972, 9.6, 277.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part308.geometry}
        material={materials['mb:o:3:192']}
        position={[-539.93, 83.427, 3.722]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3080.geometry}
        material={materials['mb:o:210:119']}
        position={[-395.934, 6.4, 317.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3081.geometry}
        material={materials['mb:o:210:119']}
        position={[-395.931, 9.6, 325.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3082.geometry}
        material={materials['mb:o:210:119']}
        position={[-475.924, -9.6, 221.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3083.geometry}
        material={materials['mb:o:210:119']}
        position={[-475.97, -9.6, 285.778]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3084.geometry}
        material={materials['mb:o:210:119']}
        position={[-475.967, -3.2, 357.778]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3085.geometry}
        material={materials['mb:o:30:138']}
        position={[-415.923, -3.2, 297.763]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3086.geometry}
        material={materials['mb:o:30:119']}
        position={[-475.888, -6.4, 317.767]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3087.geometry}
        material={materials['mb:o:30:119']}
        position={[-471.95, 0, 369.774]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3088.geometry}
        material={materials['mb:o:103:308']}
        position={[-399.906, -6.4, 357.751]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3089.geometry}
        material={materials['mb:o:103:138']}
        position={[-439.914, -9.6, 245.754]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part309.geometry}
        material={materials['mb:o:3:141']}
        position={[-542.584, 89.25, 3.652]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3090.geometry}
        material={materials['mb:o:103:138']}
        position={[-471.917, -16, 205.773]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3091.geometry}
        material={materials['mb:o:103:308']}
        position={[-399.964, -16, 229.751]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3092.geometry}
        material={materials['mb:o:149:308']}
        position={[-399.928, -6.4, 293.751]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3093.geometry}
        material={materials['mb:o:3:138']}
        position={[-451.89, 0, 313.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3094.geometry}
        material={materials['mb:o:3:138']}
        position={[-451.873, 0, 361.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3095.geometry}
        material={materials['mb:o:3:138']}
        position={[-443.868, 0, 377.756]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3096.geometry}
        material={materials['mb:o:3:330']}
        position={[-443.879, 0, 345.756]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3097.geometry}
        material={materials['mb:o:3:27']}
        position={[-435.873, 0, 361.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3098.geometry}
        material={materials['mb:o:3:330']}
        position={[-435.89, 0, 313.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3099.geometry}
        material={materials['mb:o:3:138']}
        position={[-419.887, -3.2, 321.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part310.geometry}
        material={materials['mb:o:3:192']}
        position={[-541.149, 47.849, 3.69]}
        rotation={[1.559, 0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3100.geometry}
        material={materials['mb:o:3:119']}
        position={[-467.884, 0, 329.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3101.geometry}
        material={materials['mb:o:3:25']}
        position={[-435.926, -6.4, 209.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3102.geometry}
        material={materials['mb:o:3:330']}
        position={[-467.926, -6.4, 209.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3103.geometry}
        material={materials['mb:o:3:330']}
        position={[-451.914, -3.2, 241.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3104.geometry}
        material={materials['mb:o:3:27']}
        position={[-419.926, -9.6, 209.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3105.geometry}
        material={materials['mb:o:3:27']}
        position={[-451.901, -3.2, 281.758]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3106.geometry}
        material={materials['mb:o:3:138']}
        position={[-435.906, -3.2, 265.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3107.geometry}
        material={materials['mb:o:3:25']}
        position={[-419.903, -6.4, 273.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3108.geometry}
        material={materials['mb:o:3:27']}
        position={[-427.895, -6.4, 297.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3109.geometry}
        material={materials['mb:o:3:27']}
        position={[-459.906, -6.4, 265.761]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part311.geometry}
        material={materials['mb:o:3:192']}
        position={[-539.869, 44.916, 3.724]}
        rotation={[1.559, 0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3110.geometry}
        material={materials['mb:o:3:27']}
        position={[-419.917, -9.6, 233.747]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3111.geometry}
        material={materials['mb:o:3:330']}
        position={[-443.931, -9.6, 193.756]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3112.geometry}
        material={materials['mb:o:3:330']}
        position={[-411.917, -6.4, 233.745]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3113.geometry}
        material={materials['mb:o:3:138']}
        position={[-415.923, 0, 297.763]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3114.geometry}
        material={materials['mb:o:3:119']}
        position={[-395.913, 6.4, 377.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3115.geometry}
        material={materials['mb:o:3:199']}
        position={[-403.938, 9.6, 305.753]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3116.geometry}
        material={materials['mb:o:3:115']}
        position={[-411.931, -16, 193.745]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3117.geometry}
        material={materials['mb:o:3:119']}
        position={[-487.917, -10.4, 273.768]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3118.geometry}
        material={materials['mb:o:3:119']}
        position={[-475.953, 0, 377.772]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3119.geometry}
        material={materials['mb:o:3:138']}
        position={[-427.906, -6.4, 249.758]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part312.geometry}
        material={materials['mb:o:3:192']}
        position={[-563.293, 41.973, 18.011]}
        rotation={[1.122, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3120.geometry}
        material={materials['mb:o:544:25']}
        position={[-439.877, -6.4, 349.754]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3121.geometry}
        material={materials['mb:o:544:25']}
        position={[-439.9, -9.6, 285.754]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3122.geometry}
        material={materials['mb:o:164:308']}
        position={[-447.914, -16, 373.754]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3123.geometry}
        material={materials['mb:o:655:115']}
        position={[-475.963, 0, 361.778]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3124.geometry}
        material={materials['mb:o:357:115']}
        position={[-395.963, 6.4, 249.753]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3125.geometry}
        material={materials['mb:o:357:119']}
        position={[-395.943, 12.8, 289.75]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3126.geometry}
        material={materials['mb:o:357:119']}
        position={[-491.139, -7.2, 337.767]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3127.geometry}
        material={materials['mb:o:357:199']}
        position={[-475.968, 0, 345.778]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3128.geometry}
        material={materials['mb:o:357:115']}
        position={[-483.928, -3.2, 305.772]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3129.geometry}
        material={materials['mb:o:81:141']}
        position={[-451.881, 0, 337.758]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part313.geometry}
        material={materials['mb:o:3:192']}
        position={[-563.221, 47.74, 15.235]}
        rotation={[1.122, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3130.geometry}
        material={materials['mb:o:81:141']}
        position={[-435.879, 0, 329.764]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3131.geometry}
        material={materials['mb:o:81:141']}
        position={[-427.879, -3.2, 361.761]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3132.geometry}
        material={materials['mb:o:81:330']}
        position={[-435.884, -3.2, 345.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3133.geometry}
        material={materials['mb:o:81:141']}
        position={[-451.917, -3.2, 249.769]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3134.geometry}
        material={materials['mb:o:81:141']}
        position={[-427.898, -6.4, 289.75]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3135.geometry}
        material={materials['mb:o:81:330']}
        position={[-451.892, -3.2, 305.758]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3136.geometry}
        material={materials['mb:o:81:141']}
        position={[-435.903, -3.2, 289.764]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3137.geometry}
        material={materials['mb:o:81:141']}
        position={[-443.92, -6.4, 225.756]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3138.geometry}
        material={materials['mb:o:81:141']}
        position={[-443.934, -12.8, 185.756]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3139.geometry}
        material={materials['mb:o:81:119']}
        position={[-403.973, -13.599, 197.751]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part314.geometry}
        material={materials['mb:o:3:192']}
        position={[-554.305, 41.839, -19.636]}
        rotation={[2, 0.011, 1.595]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3140.geometry}
        material={materials['mb:o:81:119']}
        position={[-403.909, -3.2, 225.736]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3141.geometry}
        material={materials['mb:o:81:199']}
        position={[-403.949, 6.4, 265.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3142.geometry}
        material={materials['mb:o:81:115']}
        position={[-404.757, 7.2, 273.753]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3143.geometry}
        material={materials['mb:o:81:119']}
        position={[-404.777, 7.2, 329.753]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3144.geometry}
        material={materials['mb:o:81:115']}
        position={[-411.963, 3.2, 305.75]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3145.geometry}
        material={materials['mb:o:81:119']}
        position={[-399.942, 8.8, 353.768]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3146.geometry}
        material={materials['mb:o:81:115']}
        position={[-395.931, 6.4, 369.772]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3147.geometry}
        material={materials['mb:o:81:119']}
        position={[-411.94, -12.8, 201.767]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3148.geometry}
        material={materials['mb:o:81:119']}
        position={[-411.903, -3.2, 241.764]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3149.geometry}
        material={materials['mb:o:81:119']}
        position={[-487.945, -10.4, 353.768]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part315.geometry}
        material={materials['mb:o:3:192']}
        position={[-540.036, 122.007, 3.719]}
        rotation={[1.558, 0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3150.geometry}
        material={materials['mb:o:81:119']}
        position={[-483.953, -6.4, 377.769]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3151.geometry}
        material={materials['mb:o:81:119']}
        position={[-487.926, -10.4, 297.768]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3152.geometry}
        material={materials['mb:o:81:115']}
        position={[-491.134, -15.2, 321.767]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3153.geometry}
        material={materials['mb:o:81:119']}
        position={[-491.884, -9.6, 329.772]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3154.geometry}
        material={materials['mb:o:81:119']}
        position={[-483.917, -12.8, 217.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3155.geometry}
        material={materials['mb:o:81:119']}
        position={[-467.914, -6.4, 241.764]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3156.geometry}
        material={materials['mb:o:81:199']}
        position={[-483.909, -12.8, 265.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3157.geometry}
        material={materials['mb:o:81:119']}
        position={[-483.942, -3.2, 345.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3158.geometry}
        material={materials['mb:o:81:119']}
        position={[-467.898, -3.2, 289.764]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3159.geometry}
        material={materials['mb:o:81:119']}
        position={[-483.923, -6.4, 289.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part316.geometry}
        material={materials['mb:o:3:192']}
        position={[-563.293, 118.807, 17.99]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3160.geometry}
        material={materials['mb:o:81:119']}
        position={[-471.963, 5.6, 361.776]}
        rotation={[-Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3161.geometry}
        material={materials['mb:o:81:115']}
        position={[-475.945, 3.2, 353.772]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3162.geometry}
        material={materials['mb:o:163:119']}
        position={[-403.943, 0, 289.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3163.geometry}
        material={materials['mb:o:163:119']}
        position={[-403.946, 0, 297.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3164.geometry}
        material={materials['mb:o:163:115']}
        position={[-403.952, 3.2, 313.753]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3165.geometry}
        material={materials['mb:o:163:115']}
        position={[-395.942, 3.2, 353.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3166.geometry}
        material={materials['mb:o:163:119']}
        position={[-483.939, -12.8, 337.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3167.geometry}
        material={materials['mb:o:163:199']}
        position={[-483.934, -12.8, 321.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3168.geometry}
        material={materials['mb:o:163:119']}
        position={[-483.931, -12.8, 313.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3169.geometry}
        material={materials['mb:o:163:119']}
        position={[-483.928, -12.8, 305.769]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part317.geometry}
        material={materials['mb:o:3:141']}
        position={[-563.219, 124.56, 15.186]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3170.geometry}
        material={materials['mb:o:802:119']}
        position={[-395.95, 0, 253.756]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3171.geometry}
        material={materials['mb:o:802:119']}
        position={[-395.959, 3.2, 277.756]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3172.geometry}
        material={materials['mb:o:802:115']}
        position={[-395.978, 3.2, 333.756]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3173.geometry}
        material={materials['mb:o:802:115']}
        position={[-475.921, -12.8, 229.767]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3174.geometry}
        material={materials['mb:o:824:119']}
        position={[-399.971, -12.8, 209.751]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3175.geometry}
        material={materials['mb:o:1294:119']}
        position={[-487.847, 0, 308.193]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3176.geometry}
        material={materials['mb:o:1294:119']}
        position={[-567.886, -16, 292.187]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3177.geometry}
        material={materials['mb:o:2907:199']}
        position={[-495.868, -9.6, 264.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3178.geometry}
        material={materials['mb:o:2907:119']}
        position={[-495.887, -3.2, 320.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3179.geometry}
        material={materials['mb:o:2907:119']}
        position={[-575.869, -25.6, 376.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part318.geometry}
        material={materials['mb:o:3:192']}
        position={[-577.564, 122.007, -5.266]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3180.geometry}
        material={materials['mb:o:2907:119']}
        position={[-567.869, -19.2, 376.199]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3181.geometry}
        material={materials['mb:o:2907:119']}
        position={[-575.831, -25.6, 240.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3182.geometry}
        material={materials['mb:o:2907:115']}
        position={[-576.639, -21.6, 232.19]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3183.geometry}
        material={materials['mb:o:1642:119']}
        position={[-567.84, -32, 184.201]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3184.geometry}
        material={materials['mb:o:217:119']}
        position={[-531.838, -25.6, 188.181]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3185.geometry}
        material={materials['mb:o:3678:119']}
        position={[-575.867, -12.8, 368.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3186.geometry}
        material={materials['mb:o:150:308']}
        position={[-499.831, -28.8, 372.181]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3187.geometry}
        material={materials['mb:o:150:308']}
        position={[-531.831, -28.8, 332.181]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3188.geometry}
        material={materials['mb:o:150:308']}
        position={[-491.867, -28.8, 268.178]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3189.geometry}
        material={materials['mb:o:63:119']}
        position={[-495.854, -12.8, 304.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part319.geometry}
        material={materials['mb:o:3:141']}
        position={[-574.76, 127.76, -5.193]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3190.geometry}
        material={materials['mb:o:63:119']}
        position={[-495.849, -12.8, 320.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3191.geometry}
        material={materials['mb:o:63:119']}
        position={[-575.8, -25.6, 328.196]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3192.geometry}
        material={materials['mb:o:63:115']}
        position={[-567.823, -25.6, 264.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3193.geometry}
        material={materials['mb:o:332:308']}
        position={[-491.847, -28.8, 324.178]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3194.geometry}
        material={materials['mb:o:358:308']}
        position={[-567.793, -28.8, 348.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3195.geometry}
        material={materials['mb:o:67:119']}
        position={[-515.833, -28.8, 204.169]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3196.geometry}
        material={materials['mb:o:67:308']}
        position={[-491.878, -25.6, 236.178]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3197.geometry}
        material={materials['mb:o:67:308']}
        position={[-491.878, -22.4, 236.178]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3198.geometry}
        material={materials['mb:o:281:119']}
        position={[-567.833, -32, 172.168]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3199.geometry}
        material={materials['mb:o:281:119']}
        position={[-547.831, -32, 168.175]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part320.geometry}
        material={materials['mb:o:3:141']}
        position={[-573.358, 130.636, -5.156]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3200.geometry}
        material={materials['mb:o:281:119']}
        position={[-579.847, -24, 312.194]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3201.geometry}
        material={materials['mb:o:281:119']}
        position={[-571.864, -19.2, 360.197]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3202.geometry}
        material={materials['mb:o:45:119']}
        position={[-547.838, -25.6, 188.175]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3203.geometry}
        material={materials['mb:o:33:27']}
        position={[-539.795, -16, 344.183]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3204.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.803, -12.8, 320.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3205.geometry}
        material={materials['mb:o:33:119']}
        position={[-535.807, -12.8, 332.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3206.geometry}
        material={materials['mb:o:33:119']}
        position={[-535.816, -12.8, 356.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3207.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.82, -12.8, 368.181]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3208.geometry}
        material={materials['mb:o:33:119']}
        position={[-519.818, -16, 372.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3209.geometry}
        material={materials['mb:o:33:119']}
        position={[-503.81, -12.8, 340.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part321.geometry}
        material={materials['mb:o:3:141']}
        position={[-580.546, 134.142, -5.344]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3210.geometry}
        material={materials['mb:o:33:119']}
        position={[-519.793, -16, 348.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3211.geometry}
        material={materials['mb:o:33:119']}
        position={[-527.813, -19.2, 220.182]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3212.geometry}
        material={materials['mb:o:33:119']}
        position={[-559.813, -19.2, 220.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3213.geometry}
        material={materials['mb:o:33:119']}
        position={[-547.831, -19.2, 240.186]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3214.geometry}
        material={materials['mb:o:33:119']}
        position={[-511.827, -19.2, 228.199]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3215.geometry}
        material={materials['mb:o:33:119']}
        position={[-543.824, -19.2, 260.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3216.geometry}
        material={materials['mb:o:33:119']}
        position={[-519.818, -19.2, 276.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3217.geometry}
        material={materials['mb:o:33:119']}
        position={[-547.809, -19.2, 304.186]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3218.geometry}
        material={materials['mb:o:33:119']}
        position={[-527.832, -16, 276.182]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3219.geometry}
        material={materials['mb:o:33:119']}
        position={[-503.832, -16, 276.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part322.geometry}
        material={materials['mb:o:3:192']}
        position={[-539.93, 64.227, 3.722]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3220.geometry}
        material={materials['mb:o:33:119']}
        position={[-559.832, -16, 276.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3221.geometry}
        material={materials['mb:o:33:119']}
        position={[-559.84, -16, 300.171]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3222.geometry}
        material={materials['mb:o:33:25']}
        position={[-547.806, -25.6, 200.175]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3223.geometry}
        material={materials['mb:o:33:138']}
        position={[-531.806, -25.6, 200.181]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3224.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.823, -19.2, 264.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3225.geometry}
        material={materials['mb:o:33:119']}
        position={[-515.825, -19.2, 256.186]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3226.geometry}
        material={materials['mb:o:33:119']}
        position={[-527.824, -19.2, 252.182]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3227.geometry}
        material={materials['mb:o:33:119']}
        position={[-511.824, -22.4, 220.199]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3228.geometry}
        material={materials['mb:o:33:119']}
        position={[-551.807, -22.4, 204.174]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3229.geometry}
        material={materials['mb:o:33:119']}
        position={[-515.806, -25.6, 200.186]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part323.geometry}
        material={materials['mb:o:3:192']}
        position={[-554.302, 60.852, -19.74]}
        rotation={[1.973, 0.01, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3230.geometry}
        material={materials['mb:o:33:119']}
        position={[-559.836, -25.6, 196.199]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3231.geometry}
        material={materials['mb:o:33:119']}
        position={[-515.843, -32, 176.183]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3232.geometry}
        material={materials['mb:o:33:27']}
        position={[-519.841, -28.8, 180.185]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3233.geometry}
        material={materials['mb:o:33:119']}
        position={[-503.818, -12.8, 364.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3234.geometry}
        material={materials['mb:o:33:138']}
        position={[-495.821, -16, 372.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3235.geometry}
        material={materials['mb:o:33:330']}
        position={[-503.813, -19.2, 220.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3236.geometry}
        material={materials['mb:o:33:119']}
        position={[-503.821, -19.2, 244.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3237.geometry}
        material={materials['mb:o:33:119']}
        position={[-487.886, -22.4, 212.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3238.geometry}
        material={materials['mb:o:33:115']}
        position={[-491.889, -26.4, 202.578]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3239.geometry}
        material={materials['mb:o:33:308']}
        position={[-491.885, -25.6, 216.178]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part324.geometry}
        material={materials['mb:o:3:192']}
        position={[-577.731, 64.116, -5.271]}
        rotation={[1.582, -0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3240.geometry}
        material={materials['mb:o:33:119']}
        position={[-487.883, -19.2, 220.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3241.geometry}
        material={materials['mb:o:33:119']}
        position={[-495.878, -16, 236.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3242.geometry}
        material={materials['mb:o:33:119']}
        position={[-495.867, -16, 268.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3243.geometry}
        material={materials['mb:o:33:119']}
        position={[-493.467, -8.8, 252.18]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3244.geometry}
        material={materials['mb:o:33:119']}
        position={[-496.667, -8.8, 252.179]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3245.geometry}
        material={materials['mb:o:33:119']}
        position={[-487.883, -9.6, 260.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3246.geometry}
        material={materials['mb:o:33:119']}
        position={[-491.876, -12.8, 240.178]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3247.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.861, -7.2, 292.178]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3248.geometry}
        material={materials['mb:o:33:115']}
        position={[-495.861, -3.2, 292.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3249.geometry}
        material={materials['mb:o:33:119']}
        position={[-493.475, -5.6, 276.18]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part325.geometry}
        material={materials['mb:o:3:141']}
        position={[-563.226, 66.858, 15.425]}
        rotation={[1.141, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3250.geometry}
        material={materials['mb:o:33:115']}
        position={[-493.494, -5.6, 332.18]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3251.geometry}
        material={materials['mb:o:33:138']}
        position={[-503.843, -16, 308.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3252.geometry}
        material={materials['mb:o:33:138']}
        position={[-519.807, -19.2, 308.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3253.geometry}
        material={materials['mb:o:33:138']}
        position={[-511.81, -19.2, 300.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3254.geometry}
        material={materials['mb:o:33:119']}
        position={[-491.856, -9.6, 344.194]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3255.geometry}
        material={materials['mb:o:33:119']}
        position={[-495.813, -12.8, 372.188]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3256.geometry}
        material={materials['mb:o:33:119']}
        position={[-491.856, -6.4, 344.194]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3257.geometry}
        material={materials['mb:o:33:119']}
        position={[-487.846, -9.6, 372.199]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3258.geometry}
        material={materials['mb:o:33:119']}
        position={[-487.85, -9.6, 316.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3259.geometry}
        material={materials['mb:o:33:115']}
        position={[-579.838, -23.2, 284.194]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part326.geometry}
        material={materials['mb:o:3:192']}
        position={[-563.295, 61.039, 18.089]}
        rotation={[1.141, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3260.geometry}
        material={materials['mb:o:33:119']}
        position={[-583.049, -20, 316.193]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3261.geometry}
        material={materials['mb:o:33:115']}
        position={[-579.8, -28.8, 328.197]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3262.geometry}
        material={materials['mb:o:33:119']}
        position={[-575.846, -32, 196.196]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3263.geometry}
        material={materials['mb:o:33:115']}
        position={[-575.843, -28.8, 204.196]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3264.geometry}
        material={materials['mb:o:33:119']}
        position={[-567.835, -25.6, 204.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3265.geometry}
        material={materials['mb:o:33:115']}
        position={[-573.438, -21.6, 228.191]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3266.geometry}
        material={materials['mb:o:33:119']}
        position={[-559.835, -16, 228.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3267.geometry}
        material={materials['mb:o:33:119']}
        position={[-575.829, -28.8, 244.196]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3268.geometry}
        material={materials['mb:o:33:115']}
        position={[-575.824, -28.8, 260.196]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3269.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.831, -22.4, 240.197]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part327.geometry}
        material={materials['mb:o:3:192']}
        position={[-554.307, 118.807, -19.538]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3270.geometry}
        material={materials['mb:o:33:119']}
        position={[-567.832, -19.2, 236.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3271.geometry}
        material={materials['mb:o:33:119']}
        position={[-567.827, -22.4, 252.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3272.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.858, -19.2, 344.197]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3273.geometry}
        material={materials['mb:o:33:119']}
        position={[-567.807, -22.4, 308.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3274.geometry}
        material={materials['mb:o:33:119']}
        position={[-567.799, -19.2, 332.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3275.geometry}
        material={materials['mb:o:33:119']}
        position={[-567.886, -16, 284.187]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3276.geometry}
        material={materials['mb:o:33:119']}
        position={[-559.802, -16, 324.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3277.geometry}
        material={materials['mb:o:33:119']}
        position={[-579.867, -23.2, 368.194]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3278.geometry}
        material={materials['mb:o:33:119']}
        position={[-559.868, -16, 372.201]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3279.geometry}
        material={materials['mb:o:33:119']}
        position={[-555.869, -12.8, 376.203]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part328.geometry}
        material={materials['mb:o:4959:192']}
        position={[-582.635, 43.774, -5.399]}
        rotation={[1.583, -0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3280.geometry}
        material={materials['mb:o:33:119']}
        position={[-567.867, -9.6, 368.199]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3281.geometry}
        material={materials['mb:o:33:119']}
        position={[-531.82, -19.2, 240.181]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3282.geometry}
        material={materials['mb:o:33:119']}
        position={[-571.89, -19.2, 296.186]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3283.geometry}
        material={materials['mb:o:33:115']}
        position={[-487.883, -19.2, 220.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3284.geometry}
        material={materials['mb:o:33:138']}
        position={[-503.807, -32, 196.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3285.geometry}
        material={materials['mb:o:354:119']}
        position={[-535.806, -22.4, 200.179]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3286.geometry}
        material={materials['mb:o:354:119']}
        position={[-527.84, -22.4, 192.182]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3287.geometry}
        material={materials['mb:o:354:119']}
        position={[-495.889, -26.399, 199.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3288.geometry}
        material={materials['mb:o:354:119']}
        position={[-487.879, -9.6, 248.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3289.geometry}
        material={materials['mb:o:354:199']}
        position={[-487.879, -12.8, 232.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part329.geometry}
        material={materials['mb:o:4959:192']}
        position={[-554.801, 35.374, -0.669]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3290.geometry}
        material={materials['mb:o:354:119']}
        position={[-495.868, -12.8, 264.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3291.geometry}
        material={materials['mb:o:354:119']}
        position={[-496.676, -5.6, 280.179]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3292.geometry}
        material={materials['mb:o:354:119']}
        position={[-496.696, -5.6, 336.179]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3293.geometry}
        material={materials['mb:o:354:119']}
        position={[-495.868, -12.8, 312.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3294.geometry}
        material={materials['mb:o:354:119']}
        position={[-499.868, -4, 312.178]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3295.geometry}
        material={materials['mb:o:354:138']}
        position={[-503.842, -12.8, 304.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3296.geometry}
        material={materials['mb:o:354:119']}
        position={[-511.809, -16, 304.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3297.geometry}
        material={materials['mb:o:354:119']}
        position={[-503.803, -12.8, 320.171]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3298.geometry}
        material={materials['mb:o:354:119']}
        position={[-495.856, -12.8, 344.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3299.geometry}
        material={materials['mb:o:354:119']}
        position={[-487.829, -12.8, 376.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part330.geometry}
        material={materials['mb:o:4959:192']}
        position={[-558.905, 38.574, 3.225]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3300.geometry}
        material={materials['mb:o:354:119']}
        position={[-487.835, -9.6, 360.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3301.geometry}
        material={materials['mb:o:354:199']}
        position={[-487.835, -6.4, 360.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3302.geometry}
        material={materials['mb:o:354:119']}
        position={[-487.854, -3.2, 304.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3303.geometry}
        material={materials['mb:o:354:115']}
        position={[-487.843, -6.4, 336.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3304.geometry}
        material={materials['mb:o:354:308']}
        position={[-575.869, -28.8, 376.196]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3305.geometry}
        material={materials['mb:o:354:119']}
        position={[-575.869, -22.4, 376.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3306.geometry}
        material={materials['mb:o:354:115']}
        position={[-579.858, -23.2, 344.194]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3307.geometry}
        material={materials['mb:o:354:119']}
        position={[-575.856, -28.8, 336.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3308.geometry}
        material={materials['mb:o:354:115']}
        position={[-583.8, -25.6, 328.199]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3309.geometry}
        material={materials['mb:o:354:115']}
        position={[-579.856, -20, 336.194]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part331.geometry}
        material={materials['mb:o:4959:192']}
        position={[-562.799, 54.574, -0.878]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3310.geometry}
        material={materials['mb:o:354:199']}
        position={[-575.842, -25.6, 208.196]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3311.geometry}
        material={materials['mb:o:354:115']}
        position={[-576.636, -21.6, 224.19]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3312.geometry}
        material={materials['mb:o:354:115']}
        position={[-579.839, -21.6, 232.189]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3313.geometry}
        material={materials['mb:o:354:119']}
        position={[-575.839, -28.8, 216.196]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3314.geometry}
        material={materials['mb:o:354:119']}
        position={[-567.839, -25.6, 216.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3315.geometry}
        material={materials['mb:o:354:119']}
        position={[-567.839, -19.2, 216.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3316.geometry}
        material={materials['mb:o:354:217']}
        position={[-559.834, -19.2, 232.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3317.geometry}
        material={materials['mb:o:354:115']}
        position={[-575.825, -25.6, 256.196]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3318.geometry}
        material={materials['mb:o:354:119']}
        position={[-567.882, -12.8, 352.204]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3319.geometry}
        material={materials['mb:o:354:119']}
        position={[-567.805, -16, 316.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part332.geometry}
        material={materials['mb:o:4959:192']}
        position={[-558.695, 57.774, -4.772]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3320.geometry}
        material={materials['mb:o:354:119']}
        position={[-575.882, -16, 352.201]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3321.geometry}
        material={materials['mb:o:354:119']}
        position={[-559.806, -16, 312.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3322.geometry}
        material={materials['mb:o:354:217']}
        position={[-551.834, -22.4, 232.188]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3323.geometry}
        material={materials['mb:o:354:115']}
        position={[-575.836, -19.2, 280.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3324.geometry}
        material={materials['mb:o:354:115']}
        position={[-571.879, -7.2, 360.205]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3325.geometry}
        material={materials['mb:o:354:119']}
        position={[-579.864, -22.4, 360.194]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3326.geometry}
        material={materials['mb:o:354:119']}
        position={[-575.867, -16, 368.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3327.geometry}
        material={materials['mb:o:354:119']}
        position={[-567.869, -16, 376.199]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3328.geometry}
        material={materials['mb:o:354:119']}
        position={[-487.863, 0, 280.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3329.geometry}
        material={materials['mb:o:274:119']}
        position={[-555.827, -32, 252.189]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part333.geometry}
        material={materials['mb:o:4959:192']}
        position={[-562.799, 73.774, -0.878]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3330.geometry}
        material={materials['mb:o:274:308']}
        position={[-507.827, -32, 252.172]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3331.geometry}
        material={materials['mb:o:400:119']}
        position={[-531.802, -16, 324.181]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3332.geometry}
        material={materials['mb:o:400:119']}
        position={[-539.788, -16, 364.183]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3333.geometry}
        material={materials['mb:o:400:119']}
        position={[-531.838, -22.4, 220.181]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3334.geometry}
        material={materials['mb:o:400:119']}
        position={[-539.816, -19.2, 284.183]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3335.geometry}
        material={materials['mb:o:356:308']}
        position={[-555.796, -32, 340.189]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3336.geometry}
        material={materials['mb:o:356:308']}
        position={[-507.796, -32, 340.172]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3337.geometry}
        material={materials['mb:o:38:138']}
        position={[-539.841, -32, 196.178]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3338.geometry}
        material={materials['mb:o:369:119']}
        position={[-539.844, -28.8, 204.178]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3339.geometry}
        material={materials['mb:o:223:25']}
        position={[-531.836, -25.6, 228.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part334.geometry}
        material={materials['mb:o:4959:192']}
        position={[-558.695, 76.974, -4.772]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3340.geometry}
        material={materials['mb:o:36:119']}
        position={[-575.863, -28.8, 356.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3341.geometry}
        material={materials['mb:o:36:119']}
        position={[-575.838, -28.8, 284.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3342.geometry}
        material={materials['mb:o:64:119']}
        position={[-511.799, -16, 332.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3343.geometry}
        material={materials['mb:o:64:119']}
        position={[-551.799, -16, 332.187]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3344.geometry}
        material={materials['mb:o:64:119']}
        position={[-519.802, -12.8, 324.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3345.geometry}
        material={materials['mb:o:64:119']}
        position={[-543.802, -12.8, 324.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3346.geometry}
        material={materials['mb:o:64:119']}
        position={[-511.791, -16, 356.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3347.geometry}
        material={materials['mb:o:64:119']}
        position={[-543.835, -19.2, 228.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3348.geometry}
        material={materials['mb:o:64:119']}
        position={[-551.838, -22.4, 220.187]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3349.geometry}
        material={materials['mb:o:64:119']}
        position={[-551.827, -19.2, 252.187]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part335.geometry}
        material={materials['mb:o:4959:192']}
        position={[-582.894, 101.147, 2.597]}
        rotation={[1.582, -0.409, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3350.geometry}
        material={materials['mb:o:64:119']}
        position={[-511.816, -19.2, 284.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3351.geometry}
        material={materials['mb:o:64:27']}
        position={[-531.809, -19.2, 304.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3352.geometry}
        material={materials['mb:o:64:119']}
        position={[-543.813, -16, 292.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3353.geometry}
        material={materials['mb:o:64:27']}
        position={[-535.827, -19.2, 252.182]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3354.geometry}
        material={materials['mb:o:64:119']}
        position={[-515.845, -19.2, 240.183]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3355.geometry}
        material={materials['mb:o:64:119']}
        position={[-535.84, -19.2, 212.182]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3356.geometry}
        material={materials['mb:o:64:119']}
        position={[-523.845, -22.4, 200.178]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3357.geometry}
        material={materials['mb:o:64:119']}
        position={[-519.838, -25.6, 188.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3358.geometry}
        material={materials['mb:o:64:119']}
        position={[-563.843, -28.8, 176.2]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3359.geometry}
        material={materials['mb:o:64:119']}
        position={[-515.836, -19.2, 264.183]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part336.geometry}
        material={materials['mb:o:4959:192']}
        position={[-555.426, 98.484, 23.196]}
        rotation={[1.117, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3360.geometry}
        material={materials['mb:o:64:119']}
        position={[-495.841, -16, 252.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3361.geometry}
        material={materials['mb:o:64:119']}
        position={[-495.864, -12.8, 276.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3362.geometry}
        material={materials['mb:o:64:119']}
        position={[-495.845, -12.8, 332.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3363.geometry}
        material={materials['mb:o:64:119']}
        position={[-495.791, -12.8, 356.168]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3364.geometry}
        material={materials['mb:o:64:119']}
        position={[-575.835, -28.8, 228.196]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3365.geometry}
        material={materials['mb:o:64:119']}
        position={[-567.799, -16, 332.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3366.geometry}
        material={materials['mb:o:104:119']}
        position={[-511.806, -19.2, 312.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3367.geometry}
        material={materials['mb:o:104:119']}
        position={[-487.876, -9.6, 240.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3368.geometry}
        material={materials['mb:o:104:119']}
        position={[-495.879, -12.8, 232.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3369.geometry}
        material={materials['mb:o:104:119']}
        position={[-503.846, -12.8, 328.182]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part337.geometry}
        material={materials['mb:o:4959:192']}
        position={[-534.83, 101.684, -4.147]}
        rotation={[1.558, 0.454, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3370.geometry}
        material={materials['mb:o:104:119']}
        position={[-503.845, -12.8, 312.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3371.geometry}
        material={materials['mb:o:104:119']}
        position={[-503.836, -16, 288.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3372.geometry}
        material={materials['mb:o:104:119']}
        position={[-487.857, -3.2, 296.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3373.geometry}
        material={materials['mb:o:104:115']}
        position={[-487.84, -3.2, 344.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3374.geometry}
        material={materials['mb:o:104:119']}
        position={[-583.045, -20, 304.193]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3375.geometry}
        material={materials['mb:o:104:119']}
        position={[-583.047, -28, 312.193]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3376.geometry}
        material={materials['mb:o:104:115']}
        position={[-567.842, -19.2, 224.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3377.geometry}
        material={materials['mb:o:104:119']}
        position={[-575.847, -16, 312.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3378.geometry}
        material={materials['mb:o:104:119']}
        position={[-567.845, -19.2, 304.199]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3379.geometry}
        material={materials['mb:o:104:119']}
        position={[-559.861, -16, 360.171]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part338.geometry}
        material={materials['mb:o:4959:192']}
        position={[-562.174, 98.484, -24.743]}
        rotation={[2.024, 0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3380.geometry}
        material={materials['mb:o:104:115']}
        position={[-575.864, -16, 360.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3381.geometry}
        material={materials['mb:o:9639:119']}
        position={[-531.833, -32, 172.181]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3382.geometry}
        material={materials['mb:o:203:119']}
        position={[-503.793, -16, 348.171]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3383.geometry}
        material={materials['mb:o:203:308']}
        position={[-487.839, -16, 348.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3384.geometry}
        material={materials['mb:o:203:119']}
        position={[-559.816, -19.2, 284.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3385.geometry}
        material={materials['mb:o:203:119']}
        position={[-503.816, -19.2, 284.171]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3386.geometry}
        material={materials['mb:o:203:25']}
        position={[-531.828, -28.8, 248.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3387.geometry}
        material={materials['mb:o:203:25']}
        position={[-531.826, -28.8, 256.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3388.geometry}
        material={materials['mb:o:203:25']}
        position={[-531.826, -25.6, 256.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3389.geometry}
        material={materials['mb:o:203:25']}
        position={[-531.806, -25.6, 312.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part339.geometry}
        material={materials['mb:o:4959:192']}
        position={[-554.173, 78.676, -24.672]}
        rotation={[1.973, 0.01, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3390.geometry}
        material={materials['mb:o:203:25']}
        position={[-531.806, -28.8, 312.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3391.geometry}
        material={materials['mb:o:203:119']}
        position={[-495.853, -16, 308.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3392.geometry}
        material={materials['mb:o:203:119']}
        position={[-487.842, -12.8, 340.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3393.geometry}
        material={materials['mb:o:203:308']}
        position={[-567.816, -28.8, 284.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3394.geometry}
        material={materials['mb:o:2:119']}
        position={[-535.836, -16, 288.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3395.geometry}
        material={materials['mb:o:2:138']}
        position={[-503.803, -28.8, 208.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3396.geometry}
        material={materials['mb:o:2:138']}
        position={[-495.858, -16, 352.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3397.geometry}
        material={materials['mb:o:2:119']}
        position={[-487.871, -16, 256.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3398.geometry}
        material={materials['mb:o:2:119']}
        position={[-487.876, -19.2, 240.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3399.geometry}
        material={materials['mb:o:2:119']}
        position={[-495.887, -22.4, 208.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part340.geometry}
        material={materials['mb:o:4959:192']}
        position={[-534.965, 82.174, 3.852]}
        rotation={[1.559, 0.428, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3400.geometry}
        material={materials['mb:o:2:330']}
        position={[-495.876, -19.2, 240.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3401.geometry}
        material={materials['mb:o:2:119']}
        position={[-487.879, -16, 232.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3402.geometry}
        material={materials['mb:o:2:119']}
        position={[-487.857, -9.6, 296.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3403.geometry}
        material={materials['mb:o:2:119']}
        position={[-487.849, 0, 320.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3404.geometry}
        material={materials['mb:o:2:119']}
        position={[-575.847, -28.8, 312.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3405.geometry}
        material={materials['mb:o:2:119']}
        position={[-567.831, -28.8, 240.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3406.geometry}
        material={materials['mb:o:2:115']}
        position={[-567.828, -25.6, 248.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3407.geometry}
        material={materials['mb:o:2:119']}
        position={[-567.885, -19.2, 280.204]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3408.geometry}
        material={materials['mb:o:2:119']}
        position={[-559.856, -16, 344.171]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3409.geometry}
        material={materials['mb:o:2:115']}
        position={[-495.885, -19.2, 216.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part341.geometry}
        material={materials['mb:o:4959:192']}
        position={[-563.424, 40.826, 23.001]}
        rotation={[1.122, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3410.geometry}
        material={materials['mb:o:37:119']}
        position={[-487.858, -16, 292.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3411.geometry}
        material={materials['mb:o:37:119']}
        position={[-559.835, -22.4, 228.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3412.geometry}
        material={materials['mb:o:37:119']}
        position={[-531.837, -32, 184.181]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3413.geometry}
        material={materials['mb:o:37:115']}
        position={[-503.835, -22.4, 228.171]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3414.geometry}
        material={materials['mb:o:37:119']}
        position={[-487.861, -12.8, 284.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3415.geometry}
        material={materials['mb:o:37:119']}
        position={[-487.889, -6.4, 276.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3416.geometry}
        material={materials['mb:o:37:308']}
        position={[-567.813, -25.6, 292.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3417.geometry}
        material={materials['mb:o:210:119']}
        position={[-539.806, -19.2, 312.183]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3418.geometry}
        material={materials['mb:o:210:115']}
        position={[-487.889, -3.2, 276.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3419.geometry}
        material={materials['mb:o:210:119']}
        position={[-487.85, -6.4, 316.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part342.geometry}
        material={materials['mb:o:4959:192']}
        position={[-535.04, 120.884, 3.85]}
        rotation={[1.558, 0.454, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3420.geometry}
        material={materials['mb:o:210:119']}
        position={[-487.847, -3.2, 324.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3421.geometry}
        material={materials['mb:o:210:119']}
        position={[-567.84, -22.4, 220.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3422.geometry}
        material={materials['mb:o:210:119']}
        position={[-567.886, -22.4, 284.204]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3423.geometry}
        material={materials['mb:o:210:119']}
        position={[-567.883, -16, 356.204]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3424.geometry}
        material={materials['mb:o:30:119']}
        position={[-507.839, -16, 296.189]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3425.geometry}
        material={materials['mb:o:30:119']}
        position={[-567.805, -19.2, 316.193]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3426.geometry}
        material={materials['mb:o:30:119']}
        position={[-563.867, -12.8, 368.2]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3427.geometry}
        material={materials['mb:o:103:308']}
        position={[-491.822, -19.2, 356.178]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3428.geometry}
        material={materials['mb:o:103:119']}
        position={[-531.831, -22.4, 244.181]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3429.geometry}
        material={materials['mb:o:103:119']}
        position={[-563.833, -28.8, 204.2]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part343.geometry}
        material={materials['mb:o:4959:192']}
        position={[-563.424, 117.684, 22.987]}
        rotation={[1.117, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3430.geometry}
        material={materials['mb:o:103:308']}
        position={[-491.88, -28.8, 228.178]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3431.geometry}
        material={materials['mb:o:149:308']}
        position={[-491.845, -19.2, 292.178]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3432.geometry}
        material={materials['mb:o:3:119']}
        position={[-543.806, -12.8, 312.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3433.geometry}
        material={materials['mb:o:3:119']}
        position={[-543.789, -12.8, 360.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3434.geometry}
        material={materials['mb:o:3:119']}
        position={[-535.784, -12.8, 376.182]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3435.geometry}
        material={materials['mb:o:3:330']}
        position={[-535.795, -12.8, 344.182]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3436.geometry}
        material={materials['mb:o:3:27']}
        position={[-527.789, -12.8, 360.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3437.geometry}
        material={materials['mb:o:3:330']}
        position={[-527.806, -12.8, 312.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3438.geometry}
        material={materials['mb:o:3:119']}
        position={[-511.803, -16, 320.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3439.geometry}
        material={materials['mb:o:3:119']}
        position={[-559.8, -12.8, 328.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part344.geometry}
        material={materials['mb:o:4959:192']}
        position={[-582.56, 120.884, -5.397]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3440.geometry}
        material={materials['mb:o:3:25']}
        position={[-527.842, -19.2, 208.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3441.geometry}
        material={materials['mb:o:3:330']}
        position={[-559.842, -19.2, 208.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3442.geometry}
        material={materials['mb:o:3:330']}
        position={[-543.831, -16, 240.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3443.geometry}
        material={materials['mb:o:3:27']}
        position={[-511.842, -22.4, 208.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3444.geometry}
        material={materials['mb:o:3:27']}
        position={[-543.817, -16, 280.185]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3445.geometry}
        material={materials['mb:o:3:119']}
        position={[-527.823, -16, 264.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3446.geometry}
        material={materials['mb:o:3:25']}
        position={[-511.82, -19.2, 272.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3447.geometry}
        material={materials['mb:o:3:27']}
        position={[-519.811, -19.2, 296.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3448.geometry}
        material={materials['mb:o:3:27']}
        position={[-551.823, -19.2, 264.188]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3449.geometry}
        material={materials['mb:o:3:27']}
        position={[-511.834, -22.4, 232.174]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part345.geometry}
        material={materials['mb:o:4959:192']}
        position={[-534.965, 62.974, 3.852]}
        rotation={[1.559, 0.428, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3450.geometry}
        material={materials['mb:o:3:330']}
        position={[-535.847, -22.4, 192.182]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3451.geometry}
        material={materials['mb:o:3:330']}
        position={[-503.834, -19.2, 232.171]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3452.geometry}
        material={materials['mb:o:3:119']}
        position={[-507.839, -12.8, 296.189]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3453.geometry}
        material={materials['mb:o:3:119']}
        position={[-487.829, -6.4, 376.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3454.geometry}
        material={materials['mb:o:3:199']}
        position={[-495.854, -3.2, 304.179]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3455.geometry}
        material={materials['mb:o:3:115']}
        position={[-503.847, -28.8, 192.171]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3456.geometry}
        material={materials['mb:o:3:119']}
        position={[-579.834, -23.2, 272.194]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3457.geometry}
        material={materials['mb:o:3:119']}
        position={[-567.869, -12.8, 376.199]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3458.geometry}
        material={materials['mb:o:3:119']}
        position={[-519.822, -19.2, 248.185]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3459.geometry}
        material={materials['mb:o:544:25']}
        position={[-531.793, -19.2, 348.181]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part346.geometry}
        material={materials['mb:o:4959:192']}
        position={[-554.173, 59.476, -24.672]}
        rotation={[1.973, 0.01, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3460.geometry}
        material={materials['mb:o:544:25']}
        position={[-531.816, -22.4, 284.181]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3461.geometry}
        material={materials['mb:o:164:308']}
        position={[-539.831, -28.8, 372.181]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3462.geometry}
        material={materials['mb:o:655:115']}
        position={[-567.879, -12.8, 360.204]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3463.geometry}
        material={materials['mb:o:357:115']}
        position={[-487.879, -6.4, 248.179]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3464.geometry}
        material={materials['mb:o:357:119']}
        position={[-487.86, 0, 288.176]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3465.geometry}
        material={materials['mb:o:357:119']}
        position={[-583.056, -20, 336.193]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3466.geometry}
        material={materials['mb:o:357:199']}
        position={[-567.885, -12.8, 344.204]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3467.geometry}
        material={materials['mb:o:357:115']}
        position={[-575.845, -16, 304.199]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3468.geometry}
        material={materials['mb:o:81:141']}
        position={[-543.798, -12.8, 336.185]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3469.geometry}
        material={materials['mb:o:81:141']}
        position={[-527.795, -12.8, 328.19]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part347.geometry}
        material={materials['mb:o:4959:192']}
        position={[-554.176, 117.684, -24.534]}
        rotation={[2.024, 0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3470.geometry}
        material={materials['mb:o:81:141']}
        position={[-519.795, -16, 360.188]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3471.geometry}
        material={materials['mb:o:81:330']}
        position={[-527.8, -16, 344.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3472.geometry}
        material={materials['mb:o:81:141']}
        position={[-543.834, -16, 248.196]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3473.geometry}
        material={materials['mb:o:81:141']}
        position={[-519.814, -19.2, 288.176]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3474.geometry}
        material={materials['mb:o:81:330']}
        position={[-543.809, -16, 304.185]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3475.geometry}
        material={materials['mb:o:81:141']}
        position={[-527.82, -16, 288.19]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3476.geometry}
        material={materials['mb:o:81:141']}
        position={[-535.836, -19.2, 224.182]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3477.geometry}
        material={materials['mb:o:81:141']}
        position={[-535.85, -25.6, 184.182]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3478.geometry}
        material={materials['mb:o:81:119']}
        position={[-495.889, -26.399, 196.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3479.geometry}
        material={materials['mb:o:81:119']}
        position={[-495.825, -16, 224.162]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part348.geometry}
        material={materials['mb:o:292:192']}
        position={[-563.171, 140.505, 13.356]}
        rotation={[0.786, -0.019, -3.123]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3480.geometry}
        material={materials['mb:o:81:199']}
        position={[-495.865, -6.4, 264.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3481.geometry}
        material={materials['mb:o:81:115']}
        position={[-496.674, -5.6, 272.179]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3482.geometry}
        material={materials['mb:o:81:119']}
        position={[-496.693, -5.6, 328.179]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3483.geometry}
        material={materials['mb:o:81:115']}
        position={[-503.879, -9.6, 304.176]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3484.geometry}
        material={materials['mb:o:81:119']}
        position={[-491.858, -4, 352.194]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3485.geometry}
        material={materials['mb:o:81:115']}
        position={[-487.847, -6.4, 368.199]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3486.geometry}
        material={materials['mb:o:81:119']}
        position={[-503.856, -25.6, 200.193]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3487.geometry}
        material={materials['mb:o:81:119']}
        position={[-503.82, -16, 240.19]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3488.geometry}
        material={materials['mb:o:81:119']}
        position={[-579.861, -23.2, 352.194]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3489.geometry}
        material={materials['mb:o:81:119']}
        position={[-575.869, -19.2, 376.196]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part349.geometry}
        material={materials['mb:o:292:192']}
        position={[-562.799, 35.374, -0.878]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3490.geometry}
        material={materials['mb:o:81:119']}
        position={[-579.842, -23.2, 296.194]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3491.geometry}
        material={materials['mb:o:81:115']}
        position={[-583.05, -28, 320.193]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3492.geometry}
        material={materials['mb:o:81:119']}
        position={[-583.8, -22.4, 328.199]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3493.geometry}
        material={materials['mb:o:81:119']}
        position={[-575.834, -25.6, 216.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3494.geometry}
        material={materials['mb:o:81:119']}
        position={[-559.831, -19.2, 240.19]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3495.geometry}
        material={materials['mb:o:81:199']}
        position={[-575.825, -25.6, 264.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3496.geometry}
        material={materials['mb:o:81:119']}
        position={[-575.858, -16, 344.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3497.geometry}
        material={materials['mb:o:81:119']}
        position={[-559.814, -16, 288.19]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3498.geometry}
        material={materials['mb:o:81:119']}
        position={[-575.839, -19.2, 288.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3499.geometry}
        material={materials['mb:o:81:119']}
        position={[-563.879, -7.2, 360.203]}
        rotation={[-Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part350.geometry}
        material={materials['mb:o:292:192']}
        position={[-558.695, 38.574, -4.772]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3500.geometry}
        material={materials['mb:o:81:115']}
        position={[-567.861, -9.6, 352.199]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3501.geometry}
        material={materials['mb:o:163:119']}
        position={[-495.86, -12.8, 288.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3502.geometry}
        material={materials['mb:o:163:119']}
        position={[-495.863, -12.8, 296.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3503.geometry}
        material={materials['mb:o:163:115']}
        position={[-495.868, -9.6, 312.179]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3504.geometry}
        material={materials['mb:o:163:115']}
        position={[-487.858, -9.6, 352.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3505.geometry}
        material={materials['mb:o:163:119']}
        position={[-575.856, -25.6, 336.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3506.geometry}
        material={materials['mb:o:163:199']}
        position={[-575.85, -25.6, 320.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3507.geometry}
        material={materials['mb:o:163:119']}
        position={[-575.847, -25.6, 312.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3508.geometry}
        material={materials['mb:o:163:119']}
        position={[-575.845, -25.6, 304.196]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3509.geometry}
        material={materials['mb:o:802:119']}
        position={[-487.867, -12.8, 252.182]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part351.geometry}
        material={materials['mb:o:292:192']}
        position={[-554.801, 54.574, -0.669]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3510.geometry}
        material={materials['mb:o:802:119']}
        position={[-487.875, -9.6, 276.182]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3511.geometry}
        material={materials['mb:o:802:115']}
        position={[-487.894, -9.6, 332.182]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3512.geometry}
        material={materials['mb:o:802:115']}
        position={[-567.838, -25.6, 228.193]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3513.geometry}
        material={materials['mb:o:824:119']}
        position={[-491.887, -25.6, 208.178]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3514.geometry}
        material={materials['mb:o:1294:119']}
        position={[-383.783, 3.2, 264.101]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3515.geometry}
        material={materials['mb:o:1294:119']}
        position={[-303.744, -12.8, 280.106]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3516.geometry}
        material={materials['mb:o:2907:199']}
        position={[-375.762, -6.4, 308.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3517.geometry}
        material={materials['mb:o:2907:119']}
        position={[-375.743, 0, 252.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3518.geometry}
        material={materials['mb:o:2907:119']}
        position={[-295.761, -22.4, 196.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3519.geometry}
        material={materials['mb:o:2907:119']}
        position={[-303.761, -16, 196.095]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part352.geometry}
        material={materials['mb:o:292:192']}
        position={[-558.905, 57.774, 3.225]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3520.geometry}
        material={materials['mb:o:2907:119']}
        position={[-295.8, -22.4, 332.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3521.geometry}
        material={materials['mb:o:2907:115']}
        position={[-294.991, -18.4, 340.104]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3522.geometry}
        material={materials['mb:o:1642:119']}
        position={[-303.791, -28.8, 388.092]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3523.geometry}
        material={materials['mb:o:217:119']}
        position={[-339.792, -22.4, 384.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3524.geometry}
        material={materials['mb:o:3678:119']}
        position={[-295.764, -9.6, 204.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3525.geometry}
        material={materials['mb:o:150:308']}
        position={[-371.8, -25.6, 200.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3526.geometry}
        material={materials['mb:o:150:308']}
        position={[-339.8, -25.6, 240.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3527.geometry}
        material={materials['mb:o:150:308']}
        position={[-379.764, -25.6, 304.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3528.geometry}
        material={materials['mb:o:63:119']}
        position={[-375.776, -9.6, 268.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3529.geometry}
        material={materials['mb:o:63:119']}
        position={[-375.782, -9.6, 252.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part353.geometry}
        material={materials['mb:o:292:192']}
        position={[-554.801, 73.774, -0.669]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3530.geometry}
        material={materials['mb:o:63:119']}
        position={[-295.83, -22.4, 244.098]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3531.geometry}
        material={materials['mb:o:63:115']}
        position={[-303.808, -22.4, 308.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3532.geometry}
        material={materials['mb:o:332:308']}
        position={[-379.783, -25.6, 248.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3533.geometry}
        material={materials['mb:o:358:308']}
        position={[-303.837, -25.6, 224.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3534.geometry}
        material={materials['mb:o:67:119']}
        position={[-355.797, -25.6, 368.124]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3535.geometry}
        material={materials['mb:o:67:308']}
        position={[-379.753, -22.4, 336.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3536.geometry}
        material={materials['mb:o:67:308']}
        position={[-379.753, -19.2, 336.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3537.geometry}
        material={materials['mb:o:281:119']}
        position={[-303.797, -28.8, 400.126]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3538.geometry}
        material={materials['mb:o:281:119']}
        position={[-323.799, -28.8, 404.119]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3539.geometry}
        material={materials['mb:o:281:119']}
        position={[-291.783, -20.8, 260.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part354.geometry}
        material={materials['mb:o:292:192']}
        position={[-558.905, 76.974, 3.225]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3540.geometry}
        material={materials['mb:o:281:119']}
        position={[-299.766, -16, 212.097]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3541.geometry}
        material={materials['mb:o:45:119']}
        position={[-323.792, -22.4, 384.119]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3542.geometry}
        material={materials['mb:o:33:27']}
        position={[-331.835, -12.8, 228.11]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3543.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.827, -9.6, 252.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3544.geometry}
        material={materials['mb:o:33:119']}
        position={[-335.823, -9.6, 240.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3545.geometry}
        material={materials['mb:o:33:119']}
        position={[-335.815, -9.6, 216.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3546.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.811, -9.6, 204.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3547.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.812, -12.8, 200.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3548.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.82, -9.6, 232.104]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3549.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.837, -12.8, 224.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part355.geometry}
        material={materials['mb:o:292:192']}
        position={[-554.801, 92.974, -0.669]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3550.geometry}
        material={materials['mb:o:33:119']}
        position={[-343.817, -16, 352.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3551.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.817, -16, 352.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3552.geometry}
        material={materials['mb:o:33:119']}
        position={[-323.799, -16, 332.108]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3553.geometry}
        material={materials['mb:o:33:119']}
        position={[-359.804, -16, 344.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3554.geometry}
        material={materials['mb:o:33:119']}
        position={[-327.806, -16, 312.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3555.geometry}
        material={materials['mb:o:33:119']}
        position={[-351.812, -16, 296.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3556.geometry}
        material={materials['mb:o:33:119']}
        position={[-323.822, -16, 268.108]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3557.geometry}
        material={materials['mb:o:33:119']}
        position={[-343.798, -12.8, 296.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3558.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.798, -12.8, 296.103]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3559.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.798, -12.8, 296.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part356.geometry}
        material={materials['mb:o:292:192']}
        position={[-562.799, 92.974, -0.878]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3560.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.79, -12.8, 272.123]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3561.geometry}
        material={materials['mb:o:33:25']}
        position={[-323.824, -22.4, 372.119]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3562.geometry}
        material={materials['mb:o:33:138']}
        position={[-339.824, -22.4, 372.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3563.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.808, -16, 308.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3564.geometry}
        material={materials['mb:o:33:119']}
        position={[-355.805, -16, 316.108]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3565.geometry}
        material={materials['mb:o:33:119']}
        position={[-343.806, -16, 320.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3566.geometry}
        material={materials['mb:o:33:119']}
        position={[-359.806, -19.2, 352.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3567.geometry}
        material={materials['mb:o:33:119']}
        position={[-319.823, -19.2, 368.12]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3568.geometry}
        material={materials['mb:o:33:119']}
        position={[-355.824, -22.4, 372.108]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3569.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.795, -22.4, 376.095]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part357.geometry}
        material={materials['mb:o:292:192']}
        position={[-558.905, 96.174, 3.225]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3570.geometry}
        material={materials['mb:o:33:119']}
        position={[-355.788, -28.8, 396.11]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3571.geometry}
        material={materials['mb:o:33:27']}
        position={[-351.789, -25.6, 392.109]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3572.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.812, -9.6, 208.103]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3573.geometry}
        material={materials['mb:o:33:138']}
        position={[-375.809, -12.8, 200.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3574.geometry}
        material={materials['mb:o:33:330']}
        position={[-367.817, -16, 352.103]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3575.geometry}
        material={materials['mb:o:33:119']}
        position={[-367.809, -16, 328.103]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3576.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.744, -19.2, 360.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3577.geometry}
        material={materials['mb:o:33:115']}
        position={[-379.741, -23.2, 369.716]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3578.geometry}
        material={materials['mb:o:33:308']}
        position={[-379.746, -22.4, 356.116]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3579.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.747, -16, 352.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part358.geometry}
        material={materials['mb:o:292:192']}
        position={[-558.695, 96.174, -4.772]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3580.geometry}
        material={materials['mb:o:33:119']}
        position={[-375.753, -12.8, 336.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3581.geometry}
        material={materials['mb:o:33:119']}
        position={[-375.764, -12.8, 304.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3582.geometry}
        material={materials['mb:o:33:119']}
        position={[-378.164, -5.6, 320.114]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3583.geometry}
        material={materials['mb:o:33:119']}
        position={[-374.964, -5.6, 320.115]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3584.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.747, -6.4, 312.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3585.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.754, -9.6, 332.116]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3586.geometry}
        material={materials['mb:o:33:119']}
        position={[-371.769, -4, 280.116]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3587.geometry}
        material={materials['mb:o:33:115']}
        position={[-375.769, 0, 280.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3588.geometry}
        material={materials['mb:o:33:119']}
        position={[-378.155, -2.4, 296.114]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3589.geometry}
        material={materials['mb:o:33:115']}
        position={[-378.136, -2.4, 240.114]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part359.geometry}
        material={materials['mb:o:292:192']}
        position={[-562.799, 112.174, -0.878]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3590.geometry}
        material={materials['mb:o:33:138']}
        position={[-367.787, -12.8, 264.103]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3591.geometry}
        material={materials['mb:o:33:138']}
        position={[-351.823, -16, 264.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3592.geometry}
        material={materials['mb:o:33:138']}
        position={[-359.82, -16, 272.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3593.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.775, -6.4, 228.099]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3594.geometry}
        material={materials['mb:o:33:119']}
        position={[-375.817, -9.6, 200.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3595.geometry}
        material={materials['mb:o:33:119']}
        position={[-379.775, -3.2, 228.099]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3596.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.784, -6.4, 200.095]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3597.geometry}
        material={materials['mb:o:33:119']}
        position={[-383.78, -6.4, 256.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3598.geometry}
        material={materials['mb:o:33:115']}
        position={[-291.793, -20, 288.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3599.geometry}
        material={materials['mb:o:33:119']}
        position={[-288.582, -16.8, 256.1]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part360.geometry}
        material={materials['mb:o:292:192']}
        position={[-554.801, 112.174, -0.669]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3600.geometry}
        material={materials['mb:o:33:115']}
        position={[-291.83, -25.6, 244.097]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3601.geometry}
        material={materials['mb:o:33:119']}
        position={[-295.784, -28.8, 376.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3602.geometry}
        material={materials['mb:o:33:115']}
        position={[-295.787, -25.6, 368.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3603.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.795, -22.4, 368.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3604.geometry}
        material={materials['mb:o:33:115']}
        position={[-298.193, -18.4, 344.103]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3605.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.795, -12.8, 344.103]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3606.geometry}
        material={materials['mb:o:33:119']}
        position={[-295.801, -25.6, 328.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3607.geometry}
        material={materials['mb:o:33:115']}
        position={[-295.806, -25.6, 312.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3608.geometry}
        material={materials['mb:o:33:119']}
        position={[-299.8, -19.2, 332.097]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3609.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.798, -16, 336.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part361.geometry}
        material={materials['mb:o:292:192']}
        position={[-558.695, 115.374, -4.772]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3610.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.804, -19.2, 320.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3611.geometry}
        material={materials['mb:o:33:119']}
        position={[-299.772, -16, 228.097]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3612.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.823, -19.2, 264.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3613.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.831, -16, 240.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3614.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.744, -12.8, 288.106]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3615.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.829, -12.8, 248.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3616.geometry}
        material={materials['mb:o:33:119']}
        position={[-291.764, -20, 204.099]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3617.geometry}
        material={materials['mb:o:33:119']}
        position={[-311.762, -12.8, 200.092]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3618.geometry}
        material={materials['mb:o:33:119']}
        position={[-315.761, -9.6, 196.091]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3619.geometry}
        material={materials['mb:o:33:119']}
        position={[-303.764, -6.4, 204.095]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part362.geometry}
        material={materials['mb:o:292:192']}
        position={[-558.905, 115.374, 3.225]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3620.geometry}
        material={materials['mb:o:33:119']}
        position={[-339.811, -16, 332.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3621.geometry}
        material={materials['mb:o:33:119']}
        position={[-299.74, -16, 276.108]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3622.geometry}
        material={materials['mb:o:33:115']}
        position={[-383.747, -16, 352.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3623.geometry}
        material={materials['mb:o:33:138']}
        position={[-367.823, -28.8, 376.103]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3624.geometry}
        material={materials['mb:o:354:119']}
        position={[-335.824, -19.2, 372.115]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3625.geometry}
        material={materials['mb:o:354:119']}
        position={[-343.791, -19.2, 380.112]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3626.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.741, -23.199, 372.916]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3627.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.751, -6.4, 324.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3628.geometry}
        material={materials['mb:o:354:199']}
        position={[-383.751, -9.6, 340.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3629.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.762, -9.6, 308.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part363.geometry}
        material={materials['mb:o:292:192']}
        position={[-554.429, 140.505, -14.903]}
        rotation={[2.356, 0.019, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3630.geometry}
        material={materials['mb:o:354:119']}
        position={[-374.954, -2.4, 292.115]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3631.geometry}
        material={materials['mb:o:354:119']}
        position={[-374.935, -2.4, 236.115]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3632.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.762, -9.6, 260.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3633.geometry}
        material={materials['mb:o:354:119']}
        position={[-371.762, -0.8, 260.116]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3634.geometry}
        material={materials['mb:o:354:138']}
        position={[-367.788, -9.6, 268.103]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3635.geometry}
        material={materials['mb:o:354:119']}
        position={[-359.822, -12.8, 268.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3636.geometry}
        material={materials['mb:o:354:119']}
        position={[-367.827, -9.6, 252.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3637.geometry}
        material={materials['mb:o:354:119']}
        position={[-375.775, -9.6, 228.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3638.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.801, -9.6, 196.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3639.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.795, -6.4, 212.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part364.geometry}
        material={materials['mb:o:292:192']}
        position={[-558.167, 23.117, -24.954]}
        rotation={[1.878, 0.008, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3640.geometry}
        material={materials['mb:o:354:199']}
        position={[-383.795, -3.2, 212.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3641.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.776, 0, 268.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3642.geometry}
        material={materials['mb:o:354:115']}
        position={[-383.787, -3.2, 236.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3643.geometry}
        material={materials['mb:o:354:308']}
        position={[-295.761, -25.6, 196.098]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3644.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.761, -19.2, 196.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3645.geometry}
        material={materials['mb:o:354:115']}
        position={[-291.772, -20, 228.099]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3646.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.775, -25.6, 236.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3647.geometry}
        material={materials['mb:o:354:115']}
        position={[-287.83, -22.4, 244.095]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3648.geometry}
        material={materials['mb:o:354:115']}
        position={[-291.775, -16.8, 236.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3649.geometry}
        material={materials['mb:o:354:199']}
        position={[-295.788, -22.4, 364.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part365.geometry}
        material={materials['mb:o:292:192']}
        position={[-563.425, 78.995, 23.056]}
        rotation={[1.141, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3650.geometry}
        material={materials['mb:o:354:115']}
        position={[-294.994, -18.4, 348.104]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3651.geometry}
        material={materials['mb:o:354:115']}
        position={[-291.791, -18.4, 340.105]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3652.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.791, -25.6, 356.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3653.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.791, -22.4, 356.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3654.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.791, -16, 356.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3655.geometry}
        material={materials['mb:o:354:217']}
        position={[-311.797, -16, 340.103]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3656.geometry}
        material={materials['mb:o:354:115']}
        position={[-295.805, -22.4, 316.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3657.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.748, -9.6, 220.09]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3658.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.826, -12.8, 256.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3659.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.748, -12.8, 220.092]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part366.geometry}
        material={materials['mb:o:292:192']}
        position={[-582.676, 81.985, -5.4]}
        rotation={[1.582, -0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3660.geometry}
        material={materials['mb:o:354:119']}
        position={[-311.824, -12.8, 260.103]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3661.geometry}
        material={materials['mb:o:354:217']}
        position={[-319.797, -19.2, 340.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3662.geometry}
        material={materials['mb:o:354:115']}
        position={[-295.794, -16, 292.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3663.geometry}
        material={materials['mb:o:354:115']}
        position={[-299.751, -4, 212.088]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3664.geometry}
        material={materials['mb:o:354:119']}
        position={[-291.766, -19.2, 212.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3665.geometry}
        material={materials['mb:o:354:119']}
        position={[-295.764, -12.8, 204.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3666.geometry}
        material={materials['mb:o:354:119']}
        position={[-303.761, -12.8, 196.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3667.geometry}
        material={materials['mb:o:354:119']}
        position={[-383.768, 3.2, 292.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3668.geometry}
        material={materials['mb:o:274:119']}
        position={[-315.804, -28.8, 320.105]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3669.geometry}
        material={materials['mb:o:274:308']}
        position={[-363.804, -28.8, 320.121]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part367.geometry}
        material={materials['mb:o:292:192']}
        position={[-534.977, 21.842, -0.15]}
        rotation={[1.558, 0.467, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3670.geometry}
        material={materials['mb:o:400:119']}
        position={[-339.829, -12.8, 248.113]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3671.geometry}
        material={materials['mb:o:400:119']}
        position={[-331.842, -12.8, 208.11]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3672.geometry}
        material={materials['mb:o:400:119']}
        position={[-339.793, -19.2, 352.113]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3673.geometry}
        material={materials['mb:o:400:119']}
        position={[-331.815, -16, 288.11]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3674.geometry}
        material={materials['mb:o:356:308']}
        position={[-315.834, -28.8, 232.105]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3675.geometry}
        material={materials['mb:o:356:308']}
        position={[-363.834, -28.8, 232.121]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3676.geometry}
        material={materials['mb:o:38:138']}
        position={[-331.789, -28.8, 376.116]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3677.geometry}
        material={materials['mb:o:369:119']}
        position={[-331.786, -25.6, 368.116]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3678.geometry}
        material={materials['mb:o:223:25']}
        position={[-339.795, -22.4, 344.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3679.geometry}
        material={materials['mb:o:36:119']}
        position={[-295.768, -25.6, 216.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part368.geometry}
        material={materials['mb:o:292:192']}
        position={[-559.433, 23.116, 23.406]}
        rotation={[1.264, -0.008, -3.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3680.geometry}
        material={materials['mb:o:36:119']}
        position={[-295.793, -25.6, 288.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3681.geometry}
        material={materials['mb:o:64:119']}
        position={[-359.831, -12.8, 240.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3682.geometry}
        material={materials['mb:o:64:119']}
        position={[-319.831, -12.8, 240.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3683.geometry}
        material={materials['mb:o:64:119']}
        position={[-351.829, -9.6, 248.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3684.geometry}
        material={materials['mb:o:64:119']}
        position={[-327.829, -9.6, 248.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3685.geometry}
        material={materials['mb:o:64:119']}
        position={[-359.84, -12.8, 216.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3686.geometry}
        material={materials['mb:o:64:119']}
        position={[-327.795, -16, 344.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3687.geometry}
        material={materials['mb:o:64:119']}
        position={[-319.793, -19.2, 352.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3688.geometry}
        material={materials['mb:o:64:119']}
        position={[-319.804, -16, 320.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3689.geometry}
        material={materials['mb:o:64:119']}
        position={[-359.815, -16, 288.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part369.geometry}
        material={materials['mb:o:292:192']}
        position={[-582.98, 19.917, -1.407]}
        rotation={[1.579, -0.307, -1.543]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3690.geometry}
        material={materials['mb:o:64:27']}
        position={[-339.822, -16, 268.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3691.geometry}
        material={materials['mb:o:64:119']}
        position={[-327.817, -12.8, 280.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3692.geometry}
        material={materials['mb:o:64:27']}
        position={[-335.804, -16, 320.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3693.geometry}
        material={materials['mb:o:64:119']}
        position={[-355.786, -16, 332.11]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3694.geometry}
        material={materials['mb:o:64:119']}
        position={[-335.79, -16, 360.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3695.geometry}
        material={materials['mb:o:64:119']}
        position={[-347.786, -19.2, 372.116]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3696.geometry}
        material={materials['mb:o:64:119']}
        position={[-351.792, -22.4, 384.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3697.geometry}
        material={materials['mb:o:64:119']}
        position={[-307.788, -25.6, 396.094]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3698.geometry}
        material={materials['mb:o:64:119']}
        position={[-355.794, -16, 308.11]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3699.geometry}
        material={materials['mb:o:64:119']}
        position={[-375.79, -12.8, 320.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part370.geometry}
        material={materials['mb:o:292:192']}
        position={[-534.924, 43.585, 3.853]}
        rotation={[1.559, 0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3700.geometry}
        material={materials['mb:o:64:119']}
        position={[-375.766, -9.6, 296.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3701.geometry}
        material={materials['mb:o:64:119']}
        position={[-375.786, -9.6, 240.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3702.geometry}
        material={materials['mb:o:64:119']}
        position={[-375.84, -9.6, 216.126]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3703.geometry}
        material={materials['mb:o:64:119']}
        position={[-295.795, -25.6, 344.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3704.geometry}
        material={materials['mb:o:64:119']}
        position={[-303.831, -12.8, 240.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3705.geometry}
        material={materials['mb:o:104:119']}
        position={[-359.824, -16, 260.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3706.geometry}
        material={materials['mb:o:104:119']}
        position={[-383.754, -6.4, 332.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3707.geometry}
        material={materials['mb:o:104:119']}
        position={[-375.751, -9.6, 340.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3708.geometry}
        material={materials['mb:o:104:119']}
        position={[-367.784, -9.6, 244.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3709.geometry}
        material={materials['mb:o:104:119']}
        position={[-367.786, -9.6, 260.103]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part371.geometry}
        material={materials['mb:o:292:192']}
        position={[-554.175, 40.595, -24.604]}
        rotation={[2, 0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3710.geometry}
        material={materials['mb:o:104:119']}
        position={[-367.794, -12.8, 284.103]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3711.geometry}
        material={materials['mb:o:104:119']}
        position={[-383.773, 0, 276.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3712.geometry}
        material={materials['mb:o:104:115']}
        position={[-383.79, 0, 228.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3713.geometry}
        material={materials['mb:o:104:119']}
        position={[-288.586, -16.8, 268.1]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3714.geometry}
        material={materials['mb:o:104:119']}
        position={[-288.583, -24.8, 260.1]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3715.geometry}
        material={materials['mb:o:104:115']}
        position={[-303.788, -16, 348.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3716.geometry}
        material={materials['mb:o:104:119']}
        position={[-295.783, -12.8, 260.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3717.geometry}
        material={materials['mb:o:104:119']}
        position={[-303.786, -16, 268.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3718.geometry}
        material={materials['mb:o:104:119']}
        position={[-311.769, -12.8, 212.123]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3719.geometry}
        material={materials['mb:o:104:115']}
        position={[-295.766, -12.8, 212.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part372.geometry}
        material={materials['mb:o:292:192']}
        position={[-582.676, 62.785, -5.4]}
        rotation={[1.582, -0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3720.geometry}
        material={materials['mb:o:9639:119']}
        position={[-339.797, -28.8, 400.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3721.geometry}
        material={materials['mb:o:203:119']}
        position={[-367.837, -12.8, 224.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3722.geometry}
        material={materials['mb:o:203:308']}
        position={[-383.791, -12.8, 224.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3723.geometry}
        material={materials['mb:o:203:119']}
        position={[-311.815, -16, 288.103]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3724.geometry}
        material={materials['mb:o:203:119']}
        position={[-367.815, -16, 288.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3725.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.802, -25.6, 324.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3726.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.805, -25.6, 316.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3727.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.805, -22.4, 316.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3728.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.824, -22.4, 260.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3729.geometry}
        material={materials['mb:o:203:25']}
        position={[-339.824, -25.6, 260.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part373.geometry}
        material={materials['mb:o:292:192']}
        position={[-563.425, 59.795, 23.056]}
        rotation={[1.141, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3730.geometry}
        material={materials['mb:o:203:119']}
        position={[-375.777, -12.8, 264.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3731.geometry}
        material={materials['mb:o:203:119']}
        position={[-383.788, -9.6, 232.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3732.geometry}
        material={materials['mb:o:203:308']}
        position={[-303.815, -25.6, 288.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3733.geometry}
        material={materials['mb:o:2:119']}
        position={[-335.794, -12.8, 284.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3734.geometry}
        material={materials['mb:o:2:138']}
        position={[-367.827, -25.6, 364.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3735.geometry}
        material={materials['mb:o:2:138']}
        position={[-375.772, -12.8, 220.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3736.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.759, -12.8, 316.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3737.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.754, -16, 332.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3738.geometry}
        material={materials['mb:o:2:119']}
        position={[-375.743, -19.2, 364.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3739.geometry}
        material={materials['mb:o:2:330']}
        position={[-375.754, -16, 332.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part374.geometry}
        material={materials['mb:o:205:192']}
        position={[-562.799, 16.174, -0.878]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3740.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.751, -12.8, 340.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3741.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.773, -6.4, 276.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3742.geometry}
        material={materials['mb:o:2:119']}
        position={[-383.782, 3.2, 252.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3743.geometry}
        material={materials['mb:o:2:119']}
        position={[-295.783, -25.6, 260.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3744.geometry}
        material={materials['mb:o:2:119']}
        position={[-303.8, -25.6, 332.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3745.geometry}
        material={materials['mb:o:2:115']}
        position={[-303.802, -22.4, 324.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3746.geometry}
        material={materials['mb:o:2:119']}
        position={[-303.746, -16, 292.09]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3747.geometry}
        material={materials['mb:o:2:119']}
        position={[-311.775, -12.8, 228.123]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3748.geometry}
        material={materials['mb:o:2:115']}
        position={[-375.746, -16, 356.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3749.geometry}
        material={materials['mb:o:37:119']}
        position={[-383.772, -12.8, 280.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part375.geometry}
        material={materials['mb:o:205:192']}
        position={[-554.801, 16.174, -0.669]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3750.geometry}
        material={materials['mb:o:37:119']}
        position={[-311.795, -19.2, 344.103]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3751.geometry}
        material={materials['mb:o:37:119']}
        position={[-339.793, -28.8, 388.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3752.geometry}
        material={materials['mb:o:37:115']}
        position={[-367.795, -19.2, 344.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3753.geometry}
        material={materials['mb:o:37:119']}
        position={[-383.769, -9.6, 288.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3754.geometry}
        material={materials['mb:o:37:119']}
        position={[-383.742, -3.2, 296.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3755.geometry}
        material={materials['mb:o:37:308']}
        position={[-303.817, -22.4, 280.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3756.geometry}
        material={materials['mb:o:210:119']}
        position={[-331.824, -16, 260.11]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3757.geometry}
        material={materials['mb:o:210:115']}
        position={[-383.742, 0, 296.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3758.geometry}
        material={materials['mb:o:210:119']}
        position={[-383.78, -3.2, 256.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3759.geometry}
        material={materials['mb:o:210:119']}
        position={[-383.783, 0, 248.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part376.geometry}
        material={materials['mb:o:205:192']}
        position={[-558.905, 19.374, 3.225]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3760.geometry}
        material={materials['mb:o:210:119']}
        position={[-303.79, -19.2, 352.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3761.geometry}
        material={materials['mb:o:210:119']}
        position={[-303.744, -19.2, 288.09]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3762.geometry}
        material={materials['mb:o:210:119']}
        position={[-303.747, -12.8, 216.09]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3763.geometry}
        material={materials['mb:o:30:119']}
        position={[-363.791, -12.8, 276.105]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3764.geometry}
        material={materials['mb:o:30:119']}
        position={[-303.826, -16, 256.101]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3765.geometry}
        material={materials['mb:o:30:119']}
        position={[-307.764, -9.6, 204.094]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3766.geometry}
        material={materials['mb:o:103:308']}
        position={[-379.808, -16, 216.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3767.geometry}
        material={materials['mb:o:103:119']}
        position={[-339.8, -19.2, 328.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3768.geometry}
        material={materials['mb:o:103:119']}
        position={[-307.797, -25.6, 368.094]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3769.geometry}
        material={materials['mb:o:103:308']}
        position={[-379.75, -25.6, 344.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part377.geometry}
        material={materials['mb:o:205:192']}
        position={[-558.695, 19.374, -4.772]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3770.geometry}
        material={materials['mb:o:149:308']}
        position={[-379.786, -16, 280.116]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3771.geometry}
        material={materials['mb:o:3:119']}
        position={[-327.824, -9.6, 260.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3772.geometry}
        material={materials['mb:o:3:119']}
        position={[-327.841, -9.6, 212.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3773.geometry}
        material={materials['mb:o:3:119']}
        position={[-335.846, -9.6, 196.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3774.geometry}
        material={materials['mb:o:3:330']}
        position={[-335.835, -9.6, 228.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3775.geometry}
        material={materials['mb:o:3:27']}
        position={[-343.841, -9.6, 212.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3776.geometry}
        material={materials['mb:o:3:330']}
        position={[-343.824, -9.6, 260.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3777.geometry}
        material={materials['mb:o:3:119']}
        position={[-359.827, -12.8, 252.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3778.geometry}
        material={materials['mb:o:3:119']}
        position={[-311.83, -9.6, 244.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3779.geometry}
        material={materials['mb:o:3:25']}
        position={[-343.788, -16, 364.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part378.geometry}
        material={materials['mb:o:213:192']}
        position={[-560.477, 164.974, -3.775]}
        rotation={[0, 1.11, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3780.geometry}
        material={materials['mb:o:3:330']}
        position={[-311.788, -16, 364.103]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3781.geometry}
        material={materials['mb:o:3:330']}
        position={[-327.8, -12.8, 332.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3782.geometry}
        material={materials['mb:o:3:27']}
        position={[-359.788, -19.2, 364.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3783.geometry}
        material={materials['mb:o:3:27']}
        position={[-327.813, -12.8, 292.109]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3784.geometry}
        material={materials['mb:o:3:119']}
        position={[-343.808, -12.8, 308.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3785.geometry}
        material={materials['mb:o:3:25']}
        position={[-359.811, -16, 300.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3786.geometry}
        material={materials['mb:o:3:27']}
        position={[-351.819, -16, 276.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3787.geometry}
        material={materials['mb:o:3:27']}
        position={[-319.808, -16, 308.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3788.geometry}
        material={materials['mb:o:3:27']}
        position={[-359.797, -19.2, 340.12]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3789.geometry}
        material={materials['mb:o:3:330']}
        position={[-335.783, -19.2, 380.112]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part379.geometry}
        material={materials['mb:o:213:192']}
        position={[-556.579, 164.974, 1.504]}
        rotation={[-Math.PI, -0.742, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3790.geometry}
        material={materials['mb:o:3:330']}
        position={[-367.797, -16, 340.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3791.geometry}
        material={materials['mb:o:3:119']}
        position={[-363.791, -9.6, 276.105]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3792.geometry}
        material={materials['mb:o:3:119']}
        position={[-383.801, -3.2, 196.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3793.geometry}
        material={materials['mb:o:3:199']}
        position={[-375.776, 0, 268.115]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3794.geometry}
        material={materials['mb:o:3:115']}
        position={[-367.783, -25.6, 380.123]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3795.geometry}
        material={materials['mb:o:3:119']}
        position={[-291.797, -20, 300.099]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3796.geometry}
        material={materials['mb:o:3:119']}
        position={[-303.761, -9.6, 196.095]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3797.geometry}
        material={materials['mb:o:3:119']}
        position={[-351.808, -16, 324.109]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3798.geometry}
        material={materials['mb:o:544:25']}
        position={[-339.837, -16, 224.113]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3799.geometry}
        material={materials['mb:o:544:25']}
        position={[-339.814, -19.2, 288.113]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part380.geometry}
        material={materials['mb:o:108:192']}
        position={[-558.8, 22.574, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3800.geometry}
        material={materials['mb:o:164:308']}
        position={[-331.8, -25.6, 200.113]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3801.geometry}
        material={materials['mb:o:655:115']}
        position={[-303.751, -9.6, 212.09]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3802.geometry}
        material={materials['mb:o:357:115']}
        position={[-383.751, -3.2, 324.115]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3803.geometry}
        material={materials['mb:o:357:119']}
        position={[-383.771, 3.2, 284.117]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3804.geometry}
        material={materials['mb:o:357:119']}
        position={[-288.575, -16.8, 236.1]}
        rotation={[-Math.PI, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3805.geometry}
        material={materials['mb:o:357:199']}
        position={[-303.746, -9.6, 228.09]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3806.geometry}
        material={materials['mb:o:357:115']}
        position={[-295.786, -12.8, 268.095]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3807.geometry}
        material={materials['mb:o:81:141']}
        position={[-327.833, -9.6, 236.109]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3808.geometry}
        material={materials['mb:o:81:141']}
        position={[-343.835, -9.6, 244.104]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3809.geometry}
        material={materials['mb:o:81:141']}
        position={[-351.835, -12.8, 212.106]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part381.geometry}
        material={materials['mb:o:108:192']}
        position={[-558.8, 41.774, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3810.geometry}
        material={materials['mb:o:81:330']}
        position={[-343.83, -12.8, 228.104]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3811.geometry}
        material={materials['mb:o:81:141']}
        position={[-327.797, -12.8, 324.098]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3812.geometry}
        material={materials['mb:o:81:141']}
        position={[-351.816, -16, 284.117]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3813.geometry}
        material={materials['mb:o:81:330']}
        position={[-327.822, -12.8, 268.109]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3814.geometry}
        material={materials['mb:o:81:141']}
        position={[-343.811, -12.8, 284.103]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3815.geometry}
        material={materials['mb:o:81:141']}
        position={[-335.794, -16, 348.112]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3816.geometry}
        material={materials['mb:o:81:141']}
        position={[-335.78, -22.4, 388.112]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3817.geometry}
        material={materials['mb:o:81:119']}
        position={[-375.741, -23.199, 376.116]}
        rotation={[-Math.PI, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3818.geometry}
        material={materials['mb:o:81:119']}
        position={[-375.805, -12.8, 348.131]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3819.geometry}
        material={materials['mb:o:81:199']}
        position={[-375.765, -3.2, 308.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part382.geometry}
        material={materials['mb:o:108:192']}
        position={[-558.8, 60.974, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3820.geometry}
        material={materials['mb:o:81:115']}
        position={[-374.957, -2.4, 300.115]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3821.geometry}
        material={materials['mb:o:81:119']}
        position={[-374.937, -2.4, 244.115]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3822.geometry}
        material={materials['mb:o:81:115']}
        position={[-367.751, -6.4, 268.117]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3823.geometry}
        material={materials['mb:o:81:119']}
        position={[-379.772, -0.8, 220.099]}
        rotation={[-Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3824.geometry}
        material={materials['mb:o:81:115']}
        position={[-383.783, -3.2, 204.095]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3825.geometry}
        material={materials['mb:o:81:119']}
        position={[-367.774, -22.4, 372.101]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3826.geometry}
        material={materials['mb:o:81:119']}
        position={[-367.811, -12.8, 332.103]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3827.geometry}
        material={materials['mb:o:81:119']}
        position={[-291.769, -20, 220.099]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3828.geometry}
        material={materials['mb:o:81:119']}
        position={[-295.761, -16, 196.098]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3829.geometry}
        material={materials['mb:o:81:119']}
        position={[-291.788, -20, 276.099]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part383.geometry}
        material={materials['mb:o:108:192']}
        position={[-558.8, 80.174, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3830.geometry}
        material={materials['mb:o:81:115']}
        position={[-288.58, -24.8, 252.1]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3831.geometry}
        material={materials['mb:o:81:119']}
        position={[-287.83, -19.2, 244.095]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3832.geometry}
        material={materials['mb:o:81:119']}
        position={[-295.797, -22.4, 356.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3833.geometry}
        material={materials['mb:o:81:119']}
        position={[-311.8, -16, 332.103]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3834.geometry}
        material={materials['mb:o:81:199']}
        position={[-295.805, -22.4, 308.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3835.geometry}
        material={materials['mb:o:81:119']}
        position={[-295.772, -12.8, 228.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3836.geometry}
        material={materials['mb:o:81:119']}
        position={[-311.816, -12.8, 284.103]}
        rotation={[Math.PI / 2, 0, 1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3837.geometry}
        material={materials['mb:o:81:119']}
        position={[-295.791, -16, 284.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3838.geometry}
        material={materials['mb:o:81:119']}
        position={[-307.751, -4, 212.091]}
        rotation={[Math.PI / 2, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3839.geometry}
        material={materials['mb:o:81:115']}
        position={[-303.769, -6.4, 220.095]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part384.geometry}
        material={materials['mb:o:108:192']}
        position={[-558.8, 99.374, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3840.geometry}
        material={materials['mb:o:163:119']}
        position={[-375.771, -9.6, 284.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3841.geometry}
        material={materials['mb:o:163:119']}
        position={[-375.768, -9.6, 276.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3842.geometry}
        material={materials['mb:o:163:115']}
        position={[-375.762, -6.4, 260.115]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3843.geometry}
        material={materials['mb:o:163:115']}
        position={[-383.772, -6.4, 220.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3844.geometry}
        material={materials['mb:o:163:119']}
        position={[-295.775, -22.4, 236.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3845.geometry}
        material={materials['mb:o:163:199']}
        position={[-295.78, -22.4, 252.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3846.geometry}
        material={materials['mb:o:163:119']}
        position={[-295.783, -22.4, 260.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3847.geometry}
        material={materials['mb:o:163:119']}
        position={[-295.786, -22.4, 268.098]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3848.geometry}
        material={materials['mb:o:802:119']}
        position={[-383.764, -9.6, 320.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3849.geometry}
        material={materials['mb:o:802:119']}
        position={[-383.755, -6.4, 296.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part385.geometry}
        material={materials['mb:o:108:192']}
        position={[-558.8, 118.574, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3850.geometry}
        material={materials['mb:o:802:115']}
        position={[-383.736, -6.4, 240.112]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3851.geometry}
        material={materials['mb:o:802:115']}
        position={[-303.793, -22.4, 344.101]}
        rotation={[Math.PI / 2, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3852.geometry}
        material={materials['mb:o:824:119']}
        position={[-379.743, -22.4, 364.116]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3853.geometry}
        material={materials['mb:o:536:24']}
        position={[-365, 32, 36]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3854.geometry}
        material={materials['mb:o:15946:102']}
        position={[-365, 0, 32]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3855.geometry}
        material={materials['mb:o:15944:102']}
        position={[-365, 19.2, 36]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3856.geometry}
        material={materials['mb:o:3056:102']}
        position={[-371.265, 28.19, 36]}
        rotation={[2.364, -0.124, 0.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3857.geometry}
        material={materials['mb:o:3057:102']}
        position={[-358.735, 28.19, 36]}
        rotation={[1.969, 0.163, -0.068]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3858.geometry}
        material={materials['mb:o:3064:24']}
        position={[-355.163, 19.54, 44.107]}
        rotation={[2.234, 0.139, -0.108]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3859.geometry}
        material={materials['mb:o:3064:24']}
        position={[-375.259, 17.171, 39.991]}
        rotation={[2.626, -0.088, 0.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part386.geometry}
        material={materials['mb:o:108:192']}
        position={[-558.8, 6.574, -0.774]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3860.geometry}
        material={materials['mb:o:382:38']}
        position={[-365, 41.6, 36]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3861.geometry}
        material={materials['mb:o:14603:308']}
        position={[-375.097, 18.43, 42.202]}
        rotation={[-0.522, 0.057, 2.985]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3862.geometry}
        material={materials['mb:o:9818:199']}
        position={[-355.469, 21.257, 45.448]}
        rotation={[2.234, 0.139, -0.108]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3863.geometry}
        material={materials['mb:o:290:192']}
        position={[-437.551, 15.86, 153.947]}
        rotation={[1.614, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3864.geometry}
        material={materials['mb:o:290:192']}
        position={[-445.551, 15.86, 153.947]}
        rotation={[1.614, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part387.geometry}
        material={materials['mb:o:16108:24']}
        position={[-423, 23.8, -13.3]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part388.geometry}
        material={materials['mb:o:4487:25']}
        position={[-422.8, 10.4, -13.3]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part389.geometry}
        material={materials['mb:o:12:192']}
        position={[-423, 10.4, -13.3]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part390.geometry}
        material={materials['mb:o:14:192']}
        position={[-427, 5.6, -13.3]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part391.geometry}
        material={materials['mb:o:13:192']}
        position={[-419, 5.6, -13.3]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part392.geometry}
        material={materials['mb:o:3056:24']}
        position={[-429.065, 19.39, -13.3]}
        rotation={[2.364, -0.124, 0.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part393.geometry}
        material={materials['mb:o:3057:24']}
        position={[-416.535, 19.39, -13.3]}
        rotation={[1.739, 0.174, -0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part394.geometry}
        material={materials['mb:o:3064:312']}
        position={[-433.059, 8.371, -9.309]}
        rotation={[2.626, -0.088, 0.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part395.geometry}
        material={materials['mb:o:3064:312']}
        position={[-413.324, 12.766, -3.345]}
        rotation={[2.005, 0.16, -0.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part396.geometry}
        material={materials['mb:o:4889:192']}
        position={[-432.894, 10.9, -5.039]}
        rotation={[2.549, -0.113, 0.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part397.geometry}
        material={materials['mb:o:5368:308']}
        position={[-423, 33.673, -13.3]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part398.geometry}
        material={materials['mb:o:2187:192']}
        position={[-346.95, 132.974, -145.077]}
        rotation={[Math.PI / 2, 0, -2.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part399.geometry}
        material={materials['mb:o:2187:192']}
        position={[-339.162, 132.974, -136.871]}
        rotation={[Math.PI / 2, 0, 0.829]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part400.geometry}
        material={materials['mb:o:1001:28']}
        position={[-382.546, 43.328, -127.767]}
        rotation={[1.583, -0.428, -2.405]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part401.geometry}
        material={materials['mb:o:1001:28']}
        position={[-351.028, 22.725, -188.392]}
        rotation={[1.878, 0.008, -0.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part402.geometry}
        material={materials['mb:o:1001:28']}
        position={[-324.96, 18.105, -183.726]}
        rotation={[1.878, 0.008, 0.81]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part403.geometry}
        material={materials['mb:o:1001:28']}
        position={[-338.365, 68.788, -167.298]}
        rotation={[1.973, 0.01, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part404.geometry}
        material={materials['mb:o:1001:28']}
        position={[-347.742, 69.17, -114.841]}
        rotation={[1.141, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part405.geometry}
        material={materials['mb:o:1001:141']}
        position={[-298.952, 21.417, -127.656]}
        rotation={[1.558, 0.467, 2.131]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part406.geometry}
        material={materials['mb:o:1001:28']}
        position={[-301.084, 23.574, -154.366]}
        rotation={[1.558, 0.467, 0.952]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part407.geometry}
        material={materials['mb:o:1001:28']}
        position={[-355.488, 19.392, -94.015]}
        rotation={[1.264, -0.008, -2.631]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part408.geometry}
        material={materials['mb:o:1001:28']}
        position={[-328.857, 21.603, -96.932]}
        rotation={[1.264, -0.008, 2.473]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part409.geometry}
        material={materials['mb:o:1001:28']}
        position={[-388.477, 18.857, -128.823]}
        rotation={[1.579, -0.307, -2.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part410.geometry}
        material={materials['mb:o:1001:141']}
        position={[-388.733, 15.803, -155.53]}
        rotation={[1.579, -0.307, -0.953]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part411.geometry}
        material={materials['mb:o:1001:28']}
        position={[-308.739, 40.481, -158.093]}
        rotation={[1.559, 0.412, 0.439]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part412.geometry}
        material={materials['mb:o:1001:28']}
        position={[-309.06, 37.354, -113.859]}
        rotation={[1.559, 0.412, 2.782]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part413.geometry}
        material={materials['mb:o:1001:28']}
        position={[-348.304, 41.458, -93.369]}
        rotation={[1.122, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part414.geometry}
        material={materials['mb:o:1001:141']}
        position={[-337.799, 40.764, -188.921]}
        rotation={[2, 0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part415.geometry}
        material={materials['mb:o:1001:141']}
        position={[-347.598, 154.574, -145.4]}
        rotation={[0, 1.11, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part416.geometry}
        material={materials['mb:o:1001:141']}
        position={[-338.673, 154.574, -136.337]}
        rotation={[Math.PI, -0.742, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part417.geometry}
        material={materials['mb:o:1001:28']}
        position={[-302.356, 59.781, -135.907]}
        rotation={[1.559, 0.428, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part418.geometry}
        material={materials['mb:o:1001:28']}
        position={[-338.365, 49.588, -167.298]}
        rotation={[1.973, 0.01, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part419.geometry}
        material={materials['mb:o:1001:28']}
        position={[-383.973, 59.325, -146.047]}
        rotation={[1.582, -0.412, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part420.geometry}
        material={materials['mb:o:1001:141']}
        position={[-347.742, 49.97, -114.841]}
        rotation={[1.141, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part421.geometry}
        material={materials['mb:o:1001:141']}
        position={[-377.182, 37.847, -167.956]}
        rotation={[1.583, -0.428, -0.374]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part422.geometry}
        material={materials['mb:o:579:141']}
        position={[-347.561, 126.671, -121.755]}
        rotation={[0.786, -0.019, -1.552]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part423.geometry}
        material={materials['mb:o:579:141']}
        position={[-347.294, 125.54, -131.934]}
        rotation={[0.786, -0.019, 1.531]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part424.geometry}
        material={materials['mb:o:579:141']}
        position={[-338.818, 125.54, -150.014]}
        rotation={[2.356, 0.019, -1.875]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part425.geometry}
        material={materials['mb:o:579:141']}
        position={[-338.551, 126.671, -160.193]}
        rotation={[2.356, 0.019, 1.589]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part426.geometry}
        material={materials['mb:o:579:141']}
        position={[-369.548, 91.273, -137.666]}
        rotation={[1.582, -0.409, 2.385]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part427.geometry}
        material={materials['mb:o:579:141']}
        position={[-362.209, 88.094, -137.474]}
        rotation={[1.582, -0.409, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part428.geometry}
        material={materials['mb:o:579:141']}
        position={[-367.005, 97.146, -137.6]}
        rotation={[1.582, -0.409, 0.814]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part429.geometry}
        material={materials['mb:o:579:141']}
        position={[-339.74, 88.713, -114.812]}
        rotation={[1.117, -0.011, 0.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part430.geometry}
        material={materials['mb:o:579:141']}
        position={[-339.551, 85.207, -122.001]}
        rotation={[1.117, -0.011, -1.364]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part431.geometry}
        material={materials['mb:o:579:141']}
        position={[-339.666, 94.466, -117.616]}
        rotation={[1.117, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part432.geometry}
        material={materials['mb:o:579:141']}
        position={[-316.894, 91.913, -144.29]}
        rotation={[1.558, 0.454, -0.756]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part433.geometry}
        material={materials['mb:o:579:141']}
        position={[-324.083, 88.407, -144.479]}
        rotation={[1.558, 0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part434.geometry}
        material={materials['mb:o:579:28']}
        position={[-319.698, 97.666, -144.364]}
        rotation={[1.558, 0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part435.geometry}
        material={materials['mb:o:579:141']}
        position={[-346.561, 85.207, -159.947]}
        rotation={[2.024, 0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part436.geometry}
        material={materials['mb:o:579:141']}
        position={[-346.372, 88.713, -167.136]}
        rotation={[2.024, 0.011, -2.292]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part437.geometry}
        material={materials['mb:o:579:141']}
        position={[-346.446, 94.466, -164.332]}
        rotation={[2.024, 0.011, 2.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part438.geometry}
        material={materials['mb:o:579:141']}
        position={[-346.299, 82.961, -169.94]}
        rotation={[2.024, 0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part439.geometry}
        material={materials['mb:o:579:141']}
        position={[-338.431, 74.676, -164.79]}
        rotation={[1.973, 0.01, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part440.geometry}
        material={materials['mb:o:579:28']}
        position={[-331.712, 72.08, -115.754]}
        rotation={[1.141, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part441.geometry}
        material={materials['mb:o:579:141']}
        position={[-366.754, 77.984, -145.596]}
        rotation={[1.582, -0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part442.geometry}
        material={materials['mb:o:579:28']}
        position={[-369.316, 72.119, -145.663]}
        rotation={[1.582, -0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part443.geometry}
        material={materials['mb:o:579:141']}
        position={[-316.91, 72.345, -136.288]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part444.geometry}
        material={materials['mb:o:579:141']}
        position={[-319.563, 78.168, -136.358]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part445.geometry}
        material={materials['mb:o:579:141']}
        position={[-321.424, 20.672, -140.408]}
        rotation={[1.558, 0.467, -1.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part446.geometry}
        material={materials['mb:o:579:141']}
        position={[-367.18, 18.927, -141.606]}
        rotation={[1.579, -0.307, 1.598]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part447.geometry}
        material={materials['mb:o:579:141']}
        position={[-320.638, 42.516, -136.386]}
        rotation={[1.559, 0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part448.geometry}
        material={materials['mb:o:579:141']}
        position={[-347.665, 36.811, -117.761]}
        rotation={[1.122, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part449.geometry}
        material={materials['mb:o:579:141']}
        position={[-338.44, 36.589, -164.444]}
        rotation={[2, 0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part450.geometry}
        material={materials['mb:o:579:141']}
        position={[-319.908, 116.866, -136.367]}
        rotation={[1.558, 0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part451.geometry}
        material={materials['mb:o:579:141']}
        position={[-317.104, 111.113, -136.293]}
        rotation={[1.558, 0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part452.geometry}
        material={materials['mb:o:579:141']}
        position={[-347.664, 113.666, -117.826]}
        rotation={[1.117, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part453.geometry}
        material={materials['mb:o:579:141']}
        position={[-347.737, 107.913, -115.022]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part454.geometry}
        material={materials['mb:o:579:141']}
        position={[-366.204, 116.866, -145.582]}
        rotation={[1.584, -0.454, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part455.geometry}
        material={materials['mb:o:579:141']}
        position={[-369.008, 111.113, -145.655]}
        rotation={[1.584, -0.454, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part456.geometry}
        material={materials['mb:o:579:141']}
        position={[-319.563, 58.968, -136.358]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part457.geometry}
        material={materials['mb:o:579:141']}
        position={[-338.431, 55.476, -164.79]}
        rotation={[1.973, 0.01, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part458.geometry}
        material={materials['mb:o:579:141']}
        position={[-366.754, 58.784, -145.596]}
        rotation={[1.582, -0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part459.geometry}
        material={materials['mb:o:579:141']}
        position={[-378.344, 53.189, -129.894]}
        rotation={[1.582, -0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part460.geometry}
        material={materials['mb:o:579:141']}
        position={[-347.672, 55.789, -117.505]}
        rotation={[1.141, -0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part461.geometry}
        material={materials['mb:o:579:141']}
        position={[-338.449, 113.666, -164.122]}
        rotation={[2.024, 0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part462.geometry}
        material={materials['mb:o:579:141']}
        position={[-338.375, 107.913, -166.926]}
        rotation={[2.024, 0.011, 2.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part463.geometry}
        material={materials['mb:o:45:192']}
        position={[-343.056, -11.026, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part464.geometry}
        material={materials['mb:o:33:192']}
        position={[-362.911, 38.109, -145.495]}
        rotation={[1.583, -0.428, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part465.geometry}
        material={materials['mb:o:33:192']}
        position={[-342.499, 17.868, -162.254]}
        rotation={[1.878, 0.008, -1.546]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part466.geometry}
        material={materials['mb:o:33:192']}
        position={[-364.607, 92.62, -137.537]}
        rotation={[1.582, -0.409, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part467.geometry}
        material={materials['mb:o:33:141']}
        position={[-362.065, 98.493, -137.471]}
        rotation={[1.582, -0.409, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part468.geometry}
        material={materials['mb:o:33:192']}
        position={[-339.609, 89.836, -119.809]}
        rotation={[1.117, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part469.geometry}
        material={materials['mb:o:33:141']}
        position={[-339.535, 95.589, -122.613]}
        rotation={[1.117, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part470.geometry}
        material={materials['mb:o:33:141']}
        position={[-317.685, 84.408, -144.311]}
        rotation={[1.558, 0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part471.geometry}
        material={materials['mb:o:33:192']}
        position={[-321.891, 93.036, -144.421]}
        rotation={[1.558, 0.454, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part472.geometry}
        material={materials['mb:o:33:141']}
        position={[-324.695, 98.789, -144.495]}
        rotation={[1.558, 0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part473.geometry}
        material={materials['mb:o:33:192']}
        position={[-346.503, 89.836, -162.14]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part474.geometry}
        material={materials['mb:o:33:141']}
        position={[-346.577, 95.589, -159.336]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part475.geometry}
        material={materials['mb:o:33:192']}
        position={[-338.495, 70.164, -162.365]}
        rotation={[1.973, 0.01, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part476.geometry}
        material={materials['mb:o:33:192']}
        position={[-347.612, 70.414, -119.808]}
        rotation={[1.141, -0.011, 1.595]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part477.geometry}
        material={materials['mb:o:33:192']}
        position={[-364.371, 73.45, -145.534]}
        rotation={[1.582, -0.412, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part478.geometry}
        material={materials['mb:o:33:192']}
        position={[-321.875, 73.598, -136.418]}
        rotation={[1.559, 0.428, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part479.geometry}
        material={materials['mb:o:33:141']}
        position={[-324.528, 79.421, -136.488]}
        rotation={[1.559, 0.428, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part480.geometry}
        material={materials['mb:o:33:192']}
        position={[-323.554, 16.014, -140.463]}
        rotation={[1.558, 0.467, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part481.geometry}
        material={materials['mb:o:33:192']}
        position={[-343.613, 17.868, -119.695]}
        rotation={[1.264, -0.008, 1.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part482.geometry}
        material={materials['mb:o:33:192']}
        position={[-364.336, 14.668, -141.531]}
        rotation={[1.579, -0.307, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part483.geometry}
        material={materials['mb:o:33:192']}
        position={[-323.022, 37.982, -136.448]}
        rotation={[1.559, 0.412, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part484.geometry}
        material={materials['mb:o:33:192']}
        position={[-347.607, 32.192, -119.975]}
        rotation={[1.122, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part485.geometry}
        material={materials['mb:o:33:192']}
        position={[-338.5, 32.014, -162.14]}
        rotation={[2, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part486.geometry}
        material={materials['mb:o:33:141']}
        position={[-322.1, 112.236, -136.424]}
        rotation={[1.558, 0.454, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part487.geometry}
        material={materials['mb:o:33:141']}
        position={[-347.606, 109.036, -120.018]}
        rotation={[1.117, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part488.geometry}
        material={materials['mb:o:33:141']}
        position={[-347.533, 114.789, -122.822]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part489.geometry}
        material={materials['mb:o:33:28']}
        position={[-364.012, 112.236, -145.524]}
        rotation={[1.584, -0.454, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part490.geometry}
        material={materials['mb:o:33:192']}
        position={[-321.875, 54.398, -136.418]}
        rotation={[1.559, 0.428, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part491.geometry}
        material={materials['mb:o:33:192']}
        position={[-338.495, 50.964, -162.365]}
        rotation={[1.973, 0.01, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part492.geometry}
        material={materials['mb:o:33:192']}
        position={[-364.371, 54.25, -145.534]}
        rotation={[1.582, -0.412, -3.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part493.geometry}
        material={materials['mb:o:33:192']}
        position={[-347.612, 51.214, -119.808]}
        rotation={[1.141, -0.011, 1.595]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part494.geometry}
        material={materials['mb:o:33:141']}
        position={[-338.506, 109.036, -161.93]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part495.geometry}
        material={materials['mb:o:291:192']}
        position={[-339.057, 113.774, -140.869]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part496.geometry}
        material={materials['mb:o:35:192']}
        position={[-346.95, 123.374, -145.077]}
        rotation={[Math.PI / 2, 0, -0.717]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part497.geometry}
        material={materials['mb:o:35:192']}
        position={[-339.162, 123.374, -136.871]}
        rotation={[Math.PI / 2, 0, -0.741]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part498.geometry}
        material={materials['mb:o:155:192']}
        position={[-343.056, 17.774, -140.974]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part499.geometry}
        material={materials['mb:o:155:192']}
        position={[-343.056, 36.974, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part500.geometry}
        material={materials['mb:o:155:192']}
        position={[-343.056, 56.174, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part501.geometry}
        material={materials['mb:o:155:192']}
        position={[-343.056, 75.374, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part502.geometry}
        material={materials['mb:o:155:192']}
        position={[-343.056, 94.574, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part503.geometry}
        material={materials['mb:o:3:192']}
        position={[-361.926, 30.627, -145.47]}
        rotation={[1.583, -0.428, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part504.geometry}
        material={materials['mb:o:3:192']}
        position={[-360.599, 33.539, -145.435]}
        rotation={[1.583, -0.428, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part505.geometry}
        material={materials['mb:o:3:192']}
        position={[-346.95, 113.774, -145.077]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part506.geometry}
        material={materials['mb:o:3:192']}
        position={[-346.95, 116.974, -145.077]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part507.geometry}
        material={materials['mb:o:3:192']}
        position={[-346.95, 120.174, -145.077]}
        rotation={[Math.PI / 2, 0, -2.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part508.geometry}
        material={materials['mb:o:3:192']}
        position={[-339.162, 116.974, -136.871]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part509.geometry}
        material={materials['mb:o:3:192']}
        position={[-339.162, 120.174, -136.871]}
        rotation={[Math.PI / 2, 0, -1.527]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part510.geometry}
        material={materials['mb:o:3:192']}
        position={[-359.667, 93.966, -137.408]}
        rotation={[1.582, -0.409, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part511.geometry}
        material={materials['mb:o:3:141']}
        position={[-339.478, 90.96, -124.805]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part512.geometry}
        material={materials['mb:o:3:141']}
        position={[-326.887, 94.16, -144.552]}
        rotation={[1.558, 0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part513.geometry}
        material={materials['mb:o:3:192']}
        position={[-346.634, 90.96, -157.143]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part514.geometry}
        material={materials['mb:o:3:192']}
        position={[-338.558, 65.652, -159.94]}
        rotation={[1.973, 0.01, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part515.geometry}
        material={materials['mb:o:3:192']}
        position={[-347.551, 65.839, -122.112]}
        rotation={[1.141, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part516.geometry}
        material={materials['mb:o:3:192']}
        position={[-361.987, 68.916, -145.471]}
        rotation={[1.582, -0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part517.geometry}
        material={materials['mb:o:3:192']}
        position={[-324.186, 69.027, -136.479]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part518.geometry}
        material={materials['mb:o:3:141']}
        position={[-326.84, 74.85, -136.548]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part519.geometry}
        material={materials['mb:o:3:192']}
        position={[-325.405, 33.449, -136.511]}
        rotation={[1.559, 0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part520.geometry}
        material={materials['mb:o:3:192']}
        position={[-324.125, 30.516, -136.477]}
        rotation={[1.559, 0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part521.geometry}
        material={materials['mb:o:3:192']}
        position={[-347.549, 27.573, -122.19]}
        rotation={[1.122, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part522.geometry}
        material={materials['mb:o:3:192']}
        position={[-347.477, 33.34, -124.966]}
        rotation={[1.122, -0.011, 1.594]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part523.geometry}
        material={materials['mb:o:3:192']}
        position={[-338.561, 27.439, -159.837]}
        rotation={[2, 0.011, 1.595]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part524.geometry}
        material={materials['mb:o:3:192']}
        position={[-324.292, 107.607, -136.481]}
        rotation={[1.558, 0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part525.geometry}
        material={materials['mb:o:3:192']}
        position={[-347.549, 104.407, -122.21]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part526.geometry}
        material={materials['mb:o:3:141']}
        position={[-347.475, 110.16, -125.014]}
        rotation={[1.117, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part527.geometry}
        material={materials['mb:o:3:192']}
        position={[-361.82, 107.607, -145.467]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part528.geometry}
        material={materials['mb:o:3:141']}
        position={[-359.016, 113.36, -145.393]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part529.geometry}
        material={materials['mb:o:3:141']}
        position={[-357.614, 116.236, -145.357]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part530.geometry}
        material={materials['mb:o:3:141']}
        position={[-364.802, 119.742, -145.545]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part531.geometry}
        material={materials['mb:o:3:192']}
        position={[-324.186, 49.827, -136.479]}
        rotation={[1.559, 0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part532.geometry}
        material={materials['mb:o:3:192']}
        position={[-338.558, 46.452, -159.94]}
        rotation={[1.973, 0.01, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part533.geometry}
        material={materials['mb:o:3:192']}
        position={[-361.987, 49.716, -145.471]}
        rotation={[1.582, -0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part534.geometry}
        material={materials['mb:o:3:141']}
        position={[-347.482, 52.458, -124.776]}
        rotation={[1.141, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part535.geometry}
        material={materials['mb:o:3:192']}
        position={[-347.551, 46.639, -122.112]}
        rotation={[1.141, -0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part536.geometry}
        material={materials['mb:o:3:192']}
        position={[-338.563, 104.407, -159.738]}
        rotation={[2.024, 0.011, -1.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part537.geometry}
        material={materials['mb:o:4959:192']}
        position={[-366.891, 29.374, -145.6]}
        rotation={[1.583, -0.428, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part538.geometry}
        material={materials['mb:o:4959:192']}
        position={[-339.057, 20.974, -140.869]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part539.geometry}
        material={materials['mb:o:4959:192']}
        position={[-343.161, 24.174, -136.975]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part540.geometry}
        material={materials['mb:o:4959:192']}
        position={[-347.055, 40.174, -141.079]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part541.geometry}
        material={materials['mb:o:4959:192']}
        position={[-342.951, 43.374, -144.973]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part542.geometry}
        material={materials['mb:o:4959:192']}
        position={[-347.055, 59.374, -141.079]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part543.geometry}
        material={materials['mb:o:4959:192']}
        position={[-342.951, 62.574, -144.973]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part544.geometry}
        material={materials['mb:o:4959:192']}
        position={[-367.15, 86.747, -137.604]}
        rotation={[1.582, -0.409, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part545.geometry}
        material={materials['mb:o:4959:192']}
        position={[-339.682, 84.084, -117.005]}
        rotation={[1.117, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part546.geometry}
        material={materials['mb:o:4959:192']}
        position={[-319.087, 87.284, -144.348]}
        rotation={[1.558, 0.454, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part547.geometry}
        material={materials['mb:o:4959:192']}
        position={[-346.43, 84.084, -164.944]}
        rotation={[2.024, 0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part548.geometry}
        material={materials['mb:o:4959:192']}
        position={[-338.429, 64.276, -164.873]}
        rotation={[1.973, 0.01, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part549.geometry}
        material={materials['mb:o:4959:192']}
        position={[-319.221, 67.774, -136.349]}
        rotation={[1.559, 0.428, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part550.geometry}
        material={materials['mb:o:4959:192']}
        position={[-347.68, 26.426, -117.199]}
        rotation={[1.122, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part551.geometry}
        material={materials['mb:o:4959:192']}
        position={[-319.296, 106.484, -136.351]}
        rotation={[1.558, 0.454, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part552.geometry}
        material={materials['mb:o:4959:192']}
        position={[-347.68, 103.284, -117.214]}
        rotation={[1.117, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part553.geometry}
        material={materials['mb:o:4959:192']}
        position={[-366.816, 106.484, -145.598]}
        rotation={[1.584, -0.454, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part554.geometry}
        material={materials['mb:o:4959:192']}
        position={[-319.221, 48.574, -136.349]}
        rotation={[1.559, 0.428, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part555.geometry}
        material={materials['mb:o:4959:192']}
        position={[-338.429, 45.076, -164.873]}
        rotation={[1.973, 0.01, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part556.geometry}
        material={materials['mb:o:4959:192']}
        position={[-338.433, 103.284, -164.734]}
        rotation={[2.024, 0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part557.geometry}
        material={materials['mb:o:292:192']}
        position={[-347.427, 126.105, -126.845]}
        rotation={[0.786, -0.019, -3.123]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part558.geometry}
        material={materials['mb:o:292:192']}
        position={[-347.055, 20.974, -141.079]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part559.geometry}
        material={materials['mb:o:292:192']}
        position={[-342.951, 24.174, -144.973]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part560.geometry}
        material={materials['mb:o:292:192']}
        position={[-339.057, 40.174, -140.869]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part561.geometry}
        material={materials['mb:o:292:192']}
        position={[-343.161, 43.374, -136.975]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part562.geometry}
        material={materials['mb:o:292:192']}
        position={[-339.057, 59.374, -140.869]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part563.geometry}
        material={materials['mb:o:292:192']}
        position={[-343.161, 62.574, -136.975]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part564.geometry}
        material={materials['mb:o:292:192']}
        position={[-339.057, 78.574, -140.869]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part565.geometry}
        material={materials['mb:o:292:192']}
        position={[-347.055, 78.574, -141.079]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part566.geometry}
        material={materials['mb:o:292:192']}
        position={[-343.161, 81.774, -136.975]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part567.geometry}
        material={materials['mb:o:292:192']}
        position={[-342.951, 81.774, -144.973]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part568.geometry}
        material={materials['mb:o:292:192']}
        position={[-347.055, 97.774, -141.079]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part569.geometry}
        material={materials['mb:o:292:192']}
        position={[-339.057, 97.774, -140.869]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part570.geometry}
        material={materials['mb:o:292:192']}
        position={[-342.951, 100.974, -144.973]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part571.geometry}
        material={materials['mb:o:292:192']}
        position={[-343.161, 100.974, -136.975]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part572.geometry}
        material={materials['mb:o:292:192']}
        position={[-338.685, 126.105, -155.103]}
        rotation={[2.356, 0.019, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part573.geometry}
        material={materials['mb:o:292:192']}
        position={[-342.423, 8.717, -165.154]}
        rotation={[1.878, 0.008, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part574.geometry}
        material={materials['mb:o:292:192']}
        position={[-347.681, 64.595, -117.144]}
        rotation={[1.141, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part575.geometry}
        material={materials['mb:o:292:192']}
        position={[-366.932, 67.585, -145.601]}
        rotation={[1.582, -0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part576.geometry}
        material={materials['mb:o:292:192']}
        position={[-319.233, 7.442, -140.35]}
        rotation={[1.558, 0.467, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part577.geometry}
        material={materials['mb:o:292:192']}
        position={[-343.689, 8.717, -116.794]}
        rotation={[1.264, -0.008, -3.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part578.geometry}
        material={materials['mb:o:292:192']}
        position={[-367.236, 5.517, -141.607]}
        rotation={[1.579, -0.307, -1.543]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part579.geometry}
        material={materials['mb:o:292:192']}
        position={[-319.18, 29.185, -136.348]}
        rotation={[1.559, 0.412, 1.599]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part580.geometry}
        material={materials['mb:o:292:192']}
        position={[-338.431, 26.195, -164.804]}
        rotation={[2, 0.011, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part581.geometry}
        material={materials['mb:o:292:192']}
        position={[-366.932, 48.385, -145.601]}
        rotation={[1.582, -0.412, -1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part582.geometry}
        material={materials['mb:o:292:192']}
        position={[-347.681, 45.395, -117.144]}
        rotation={[1.141, -0.011, -3.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part583.geometry}
        material={materials['mb:o:205:192']}
        position={[-347.055, 1.774, -141.079]}
        rotation={[Math.PI / 2, 0, 1.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part584.geometry}
        material={materials['mb:o:205:192']}
        position={[-339.057, 1.774, -140.869]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part585.geometry}
        material={materials['mb:o:205:192']}
        position={[-343.161, 4.974, -136.975]}
        rotation={[Math.PI / 2, 0, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part586.geometry}
        material={materials['mb:o:205:192']}
        position={[-342.951, 4.974, -144.973]}
        rotation={[Math.PI / 2, 0, -3.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part587.geometry}
        material={materials['mb:o:213:192']}
        position={[-344.733, 150.574, -143.976]}
        rotation={[0, 1.11, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part588.geometry}
        material={materials['mb:o:213:192']}
        position={[-340.835, 150.574, -138.696]}
        rotation={[-Math.PI, -0.742, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part589.geometry}
        material={materials['mb:o:108:192']}
        position={[-343.056, 8.174, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part590.geometry}
        material={materials['mb:o:108:192']}
        position={[-343.056, 27.374, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part591.geometry}
        material={materials['mb:o:108:192']}
        position={[-343.056, 46.574, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part592.geometry}
        material={materials['mb:o:108:192']}
        position={[-343.056, 65.774, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part593.geometry}
        material={materials['mb:o:108:192']}
        position={[-343.056, 84.974, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part594.geometry}
        material={materials['mb:o:108:192']}
        position={[-343.056, 104.174, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part595.geometry}
        material={materials['mb:o:108:192']}
        position={[-343.056, -7.826, -140.974]}
        rotation={[Math.PI / 2, 0, -1.545]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part596.geometry}
        material={materials['mb:o:704:308']}
        position={[-441.551, 14.732, 83.743]}
        rotation={[1.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part597.geometry}
        material={materials['mb:o:33:25']}
        position={[-429.551, 24.11, 88.24]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part598.geometry}
        material={materials['mb:o:33:25']}
        position={[-453.551, 24.11, 88.24]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part599.geometry}
        material={materials['mb:o:354:308']}
        position={[-435.151, 21.454, 154.191]}
        rotation={[-3.098, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part600.geometry}
        material={materials['mb:o:354:308']}
        position={[-447.951, 21.454, 154.191]}
        rotation={[-3.098, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part601.geometry}
        material={materials['mb:o:14:308']}
        position={[-430.351, 29.047, 154.523]}
        rotation={[0.044, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part602.geometry}
        material={materials['mb:o:13:308']}
        position={[-452.751, 29.047, 154.523]}
        rotation={[0.044, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part603.geometry}
        material={materials['mb:o:179:308']}
        position={[-431.951, 21.454, 154.191]}
        rotation={[-3.089, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part604.geometry}
        material={materials['mb:o:179:308']}
        position={[-451.151, 21.454, 154.191]}
        rotation={[-3.089, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part605.geometry}
        material={materials['mb:o:81:25']}
        position={[-429.551, 16.826, 43.798]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part606.geometry}
        material={materials['mb:o:81:25']}
        position={[-453.551, 16.826, 43.798]}
        rotation={[1.623, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part607.geometry}
        material={materials['mb:o:flex-56823-0:138']}
        position={[-437.551, 32.052, 113.215]}
        rotation={[1.614, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part608.geometry}
        material={materials['mb:o:flex-85543-0:1026']}
        position={[-441.551, 33.08, 190.315]}
        rotation={[2.487, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part609.geometry}
        material={materials['mb:o:3056:138']}
        position={[-447.816, 47.85, 85.263]}
        rotation={[1.713, -0.174, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part610.geometry}
        material={materials['mb:o:3064:312']}
        position={[-451.887, 41.868, 95.421]}
        rotation={[2.051, -0.611, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part611.geometry}
        material={materials['mb:o:3057:138']}
        position={[-435.286, 47.85, 85.263]}
        rotation={[1.739, 0.173, -0.032]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part612.geometry}
        material={materials['mb:o:3064:312']}
        position={[-431.019, 41.732, 95.26]}
        rotation={[2.109, 0.698, -0.272]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part613.geometry}
        material={materials['mb:o:4538:138']}
        position={[-441.551, 38.862, 85.42]}
        rotation={[1.553, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part614.geometry}
        material={materials['mb:o:12:308']}
        position={[-441.551, 38.862, 85.42]}
        rotation={[1.553, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part615.geometry}
        material={materials['mb:o:14:308']}
        position={[-445.551, 34.062, 85.504]}
        rotation={[0.044, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part616.geometry}
        material={materials['mb:o:13:308']}
        position={[-437.551, 34.062, 85.504]}
        rotation={[0.044, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part617.geometry}
        material={materials['mb:o:1658:26']}
        position={[-441.551, 61.258, 85.029]}
        rotation={[1.553, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part618.geometry}
        material={materials['mb:o:5209:312']}
        position={[-441.551, 51.66, 85.197]}
        rotation={[1.553, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part619.geometry}
        material={materials['mb:o:3280:25']}
        position={[-429.551, 9.388, 63.435]}
        rotation={[1.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part620.geometry}
        material={materials['mb:o:3280:25']}
        position={[-453.551, 9.388, 63.435]}
        rotation={[1.623, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part621.geometry}
        material={materials['mb:o:4893:308']}
        position={[-458.651, 10.586, 63.498]}
        rotation={[1.623, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part622.geometry}
        material={materials['mb:o:4893:308']}
        position={[-424.451, 10.586, 63.498]}
        rotation={[1.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part623.geometry}
        material={materials['mb:o:178:25']}
        position={[-429.551, 19.867, 108.045]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part624.geometry}
        material={materials['mb:o:178:25']}
        position={[-453.551, 19.867, 108.045]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part625.geometry}
        material={materials['mb:o:5409:26']}
        position={[-445.551, 10.434, 43.463]}
        rotation={[1.623, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part626.geometry}
        material={materials['mb:o:5409:26']}
        position={[-437.551, 10.434, 43.463]}
        rotation={[1.623, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part627.geometry}
        material={materials['mb:o:33:25']}
        position={[-449.551, 13.895, 99.721]}
        rotation={[1.623, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part628.geometry}
        material={materials['mb:o:33:25']}
        position={[-433.551, 13.895, 99.721]}
        rotation={[1.623, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part629.geometry}
        material={materials['mb:o:33:25']}
        position={[-429.551, 10.225, 47.457]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part630.geometry}
        material={materials['mb:o:33:25']}
        position={[-453.551, 10.225, 47.457]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part631.geometry}
        material={materials['mb:o:354:25']}
        position={[-429.551, 8.76, 75.419]}
        rotation={[1.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part632.geometry}
        material={materials['mb:o:354:25']}
        position={[-453.551, 8.76, 75.419]}
        rotation={[1.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part633.geometry}
        material={materials['mb:o:369:25']}
        position={[-441.551, 12.165, 71.592]}
        rotation={[1.623, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part634.geometry}
        material={materials['mb:o:159:27']}
        position={[-441.551, 25.659, 108.349]}
        rotation={[-3.089, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part635.geometry}
        material={materials['mb:o:514:25']}
        position={[-441.551, 34.325, 76.759]}
        rotation={[1.623, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part636.geometry}
        material={materials['mb:o:210:25']}
        position={[-441.551, 27.096, 92.402]}
        rotation={[1.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part637.geometry}
        material={materials['mb:o:210:25']}
        position={[-441.551, 27.515, 84.413]}
        rotation={[1.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part638.geometry}
        material={materials['mb:o:210:25']}
        position={[-429.551, 7.713, 95.392]}
        rotation={[1.623, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part639.geometry}
        material={materials['mb:o:210:25']}
        position={[-453.551, 7.713, 95.392]}
        rotation={[1.623, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part640.geometry}
        material={materials['mb:o:489:25']}
        position={[-429.551, 15.8, 109.234]}
        rotation={[-3.089, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part641.geometry}
        material={materials['mb:o:489:25']}
        position={[-453.551, 15.8, 109.234]}
        rotation={[-3.089, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part642.geometry}
        material={materials['mb:o:175:308']}
        position={[-457.551, 21.162, 68.058]}
        rotation={[-3.089, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part643.geometry}
        material={materials['mb:o:175:308']}
        position={[-457.551, 30.749, 68.56]}
        rotation={[-3.089, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part644.geometry}
        material={materials['mb:o:175:308']}
        position={[-425.551, 30.749, 68.56]}
        rotation={[-3.089, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part645.geometry}
        material={materials['mb:o:175:308']}
        position={[-425.551, 21.162, 68.058]}
        rotation={[-3.089, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part646.geometry}
        material={materials['mb:o:68:25']}
        position={[-449.551, 17.09, 99.889]}
        rotation={[1.623, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part647.geometry}
        material={materials['mb:o:68:25']}
        position={[-433.551, 17.09, 99.889]}
        rotation={[1.623, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part648.geometry}
        material={materials['mb:o:163:25']}
        position={[-429.551, 15.151, 75.754]}
        rotation={[1.623, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part649.geometry}
        material={materials['mb:o:163:25']}
        position={[-429.551, 16.407, 51.787]}
        rotation={[1.623, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part650.geometry}
        material={materials['mb:o:163:25']}
        position={[-429.551, 24.738, 76.256]}
        rotation={[1.623, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part651.geometry}
        material={materials['mb:o:163:25']}
        position={[-429.551, 25.994, 52.289]}
        rotation={[1.623, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part652.geometry}
        material={materials['mb:o:163:25']}
        position={[-429.551, 10.28, 107.543]}
        rotation={[1.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part653.geometry}
        material={materials['mb:o:163:25']}
        position={[-453.551, 10.28, 107.543]}
        rotation={[1.623, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part654.geometry}
        material={materials['mb:o:163:25']}
        position={[-453.551, 25.994, 52.289]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part655.geometry}
        material={materials['mb:o:163:25']}
        position={[-453.551, 16.407, 51.787]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part656.geometry}
        material={materials['mb:o:163:25']}
        position={[-453.551, 24.738, 76.256]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part657.geometry}
        material={materials['mb:o:163:25']}
        position={[-453.551, 15.151, 75.754]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part658.geometry}
        material={materials['mb:o:163:25']}
        position={[-429.551, 14.313, 91.732]}
        rotation={[1.623, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part659.geometry}
        material={materials['mb:o:163:25']}
        position={[-453.551, 14.313, 91.732]}
        rotation={[1.623, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part660.geometry}
        material={materials['mb:o:1575:192']}
        position={[-441.551, 23.259, 167.883]}
        rotation={[1.614, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part661.geometry}
        material={materials['mb:o:1554:192']}
        position={[-441.551, -7.372, 163.343]}
        rotation={[1.614, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part662.geometry}
        material={materials['mb:o:1555:192']}
        position={[-441.551, -5.976, 131.373]}
        rotation={[1.614, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part663.geometry}
        material={materials['mb:o:1294:119']}
        position={[-403.98, 3.2, -71.836]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part664.geometry}
        material={materials['mb:o:1294:119']}
        position={[-484.019, -12.8, -87.842]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part665.geometry}
        material={materials['mb:o:2907:199']}
        position={[-412.001, -6.4, -115.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part666.geometry}
        material={materials['mb:o:2907:119']}
        position={[-412.02, 0, -59.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part667.geometry}
        material={materials['mb:o:2907:119']}
        position={[-492.002, -22.4, -3.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part668.geometry}
        material={materials['mb:o:2907:119']}
        position={[-484.002, -16, -3.831]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part669.geometry}
        material={materials['mb:o:2907:119']}
        position={[-491.964, -22.4, -139.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part670.geometry}
        material={materials['mb:o:2907:115']}
        position={[-492.772, -18.4, -147.839]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part671.geometry}
        material={materials['mb:o:1642:138']}
        position={[-483.973, -28.8, -195.828]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part672.geometry}
        material={materials['mb:o:217:138']}
        position={[-447.971, -22.4, -191.849]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part673.geometry}
        material={materials['mb:o:3678:119']}
        position={[-492, -9.6, -11.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part674.geometry}
        material={materials['mb:o:150:308']}
        position={[-415.964, -25.6, -7.849]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part675.geometry}
        material={materials['mb:o:150:308']}
        position={[-447.964, -25.6, -47.849]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part676.geometry}
        material={materials['mb:o:150:308']}
        position={[-408, -25.6, -111.852]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part677.geometry}
        material={materials['mb:o:63:119']}
        position={[-411.987, -9.6, -75.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part678.geometry}
        material={materials['mb:o:63:119']}
        position={[-411.982, -9.6, -59.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part679.geometry}
        material={materials['mb:o:63:119']}
        position={[-491.933, -22.4, -51.834]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part680.geometry}
        material={materials['mb:o:63:115']}
        position={[-483.955, -22.4, -115.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part681.geometry}
        material={materials['mb:o:332:308']}
        position={[-407.98, -25.6, -55.852]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part682.geometry}
        material={materials['mb:o:358:308']}
        position={[-483.926, -25.6, -31.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part683.geometry}
        material={materials['mb:o:67:138']}
        position={[-431.966, -25.6, -175.86]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part684.geometry}
        material={materials['mb:o:67:308']}
        position={[-408.011, -22.4, -143.852]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part685.geometry}
        material={materials['mb:o:67:308']}
        position={[-408.011, -19.2, -143.852]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part686.geometry}
        material={materials['mb:o:281:138']}
        position={[-483.966, -28.8, -207.861]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part687.geometry}
        material={materials['mb:o:281:138']}
        position={[-463.964, -28.8, -211.854]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part688.geometry}
        material={materials['mb:o:281:119']}
        position={[-495.98, -20.8, -67.835]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part689.geometry}
        material={materials['mb:o:281:119']}
        position={[-487.997, -16, -19.832]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part690.geometry}
        material={materials['mb:o:45:138']}
        position={[-463.971, -22.4, -191.854]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part691.geometry}
        material={materials['mb:o:33:27']}
        position={[-455.928, -12.8, -35.846]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part692.geometry}
        material={materials['mb:o:33:138']}
        position={[-447.936, -9.6, -59.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part693.geometry}
        material={materials['mb:o:33:138']}
        position={[-451.94, -9.6, -47.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part694.geometry}
        material={materials['mb:o:33:138']}
        position={[-451.949, -9.6, -23.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part695.geometry}
        material={materials['mb:o:33:138']}
        position={[-447.953, -9.6, -11.849]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part696.geometry}
        material={materials['mb:o:33:138']}
        position={[-435.951, -12.8, -7.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part697.geometry}
        material={materials['mb:o:33:138']}
        position={[-419.943, -9.6, -39.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part698.geometry}
        material={materials['mb:o:33:138']}
        position={[-435.926, -12.8, -31.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part699.geometry}
        material={materials['mb:o:33:138']}
        position={[-443.946, -16, -159.847]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part700.geometry}
        material={materials['mb:o:33:138']}
        position={[-475.946, -16, -159.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part701.geometry}
        material={materials['mb:o:33:138']}
        position={[-463.964, -16, -139.843]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part702.geometry}
        material={materials['mb:o:33:138']}
        position={[-427.96, -16, -151.831]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part703.geometry}
        material={materials['mb:o:33:138']}
        position={[-459.957, -16, -119.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part704.geometry}
        material={materials['mb:o:33:138']}
        position={[-435.951, -16, -103.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part705.geometry}
        material={materials['mb:o:33:138']}
        position={[-463.942, -16, -75.843]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part706.geometry}
        material={materials['mb:o:33:138']}
        position={[-443.965, -12.8, -103.847]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part707.geometry}
        material={materials['mb:o:33:330']}
        position={[-419.965, -12.8, -103.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part708.geometry}
        material={materials['mb:o:33:138']}
        position={[-475.965, -12.8, -103.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part709.geometry}
        material={materials['mb:o:33:138']}
        position={[-475.973, -12.8, -79.858]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part710.geometry}
        material={materials['mb:o:33:25']}
        position={[-463.939, -22.4, -179.854]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part711.geometry}
        material={materials['mb:o:33:138']}
        position={[-447.939, -22.4, -179.849]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part712.geometry}
        material={materials['mb:o:33:138']}
        position={[-447.955, -16, -115.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part713.geometry}
        material={materials['mb:o:33:138']}
        position={[-431.958, -16, -123.843]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part714.geometry}
        material={materials['mb:o:33:138']}
        position={[-443.957, -16, -127.847]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part715.geometry}
        material={materials['mb:o:33:138']}
        position={[-427.957, -19.2, -159.831]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part716.geometry}
        material={materials['mb:o:33:138']}
        position={[-467.94, -19.2, -175.856]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part717.geometry}
        material={materials['mb:o:33:138']}
        position={[-431.939, -22.4, -179.843]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part718.geometry}
        material={materials['mb:o:33:138']}
        position={[-475.969, -22.4, -183.831]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part719.geometry}
        material={materials['mb:o:33:138']}
        position={[-431.976, -28.8, -203.846]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part720.geometry}
        material={materials['mb:o:33:27']}
        position={[-435.974, -25.6, -199.845]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part721.geometry}
        material={materials['mb:o:33:138']}
        position={[-419.951, -9.6, -15.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part722.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.954, -12.8, -7.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part723.geometry}
        material={materials['mb:o:33:330']}
        position={[-419.946, -16, -159.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part724.geometry}
        material={materials['mb:o:33:138']}
        position={[-419.954, -16, -135.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part725.geometry}
        material={materials['mb:o:33:119']}
        position={[-404.019, -19.2, -167.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part726.geometry}
        material={materials['mb:o:33:115']}
        position={[-408.022, -23.2, -177.452]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part727.geometry}
        material={materials['mb:o:33:308']}
        position={[-408.018, -22.4, -163.852]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part728.geometry}
        material={materials['mb:o:33:119']}
        position={[-404.016, -16, -159.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part729.geometry}
        material={materials['mb:o:33:119']}
        position={[-412.011, -12.8, -143.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part730.geometry}
        material={materials['mb:o:33:119']}
        position={[-412, -12.8, -111.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part731.geometry}
        material={materials['mb:o:33:119']}
        position={[-409.6, -5.6, -127.849]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part732.geometry}
        material={materials['mb:o:33:119']}
        position={[-412.8, -5.6, -127.85]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part733.geometry}
        material={materials['mb:o:33:119']}
        position={[-404.016, -6.4, -119.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part734.geometry}
        material={materials['mb:o:33:119']}
        position={[-408.009, -9.6, -139.852]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part735.geometry}
        material={materials['mb:o:33:119']}
        position={[-415.994, -4, -87.852]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part736.geometry}
        material={materials['mb:o:33:115']}
        position={[-411.994, 0, -87.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part737.geometry}
        material={materials['mb:o:33:119']}
        position={[-409.608, -2.4, -103.849]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part738.geometry}
        material={materials['mb:o:33:115']}
        position={[-409.627, -2.4, -47.849]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part739.geometry}
        material={materials['mb:o:33:138']}
        position={[-419.976, -12.8, -71.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part740.geometry}
        material={materials['mb:o:33:138']}
        position={[-435.94, -16, -71.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part741.geometry}
        material={materials['mb:o:33:138']}
        position={[-427.943, -16, -79.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part742.geometry}
        material={materials['mb:o:33:119']}
        position={[-407.989, -6.4, -35.835]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part743.geometry}
        material={materials['mb:o:33:138']}
        position={[-411.946, -9.6, -7.842]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part744.geometry}
        material={materials['mb:o:33:119']}
        position={[-407.989, -3.2, -35.835]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part745.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.979, -6.4, -7.831]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part746.geometry}
        material={materials['mb:o:33:119']}
        position={[-403.983, -6.4, -63.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part747.geometry}
        material={materials['mb:o:33:115']}
        position={[-495.971, -20, -95.835]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part748.geometry}
        material={materials['mb:o:33:119']}
        position={[-499.182, -16.8, -63.836]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part749.geometry}
        material={materials['mb:o:33:115']}
        position={[-495.933, -25.6, -51.832]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part750.geometry}
        material={materials['mb:o:33:119']}
        position={[-491.979, -28.8, -183.834]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part751.geometry}
        material={materials['mb:o:33:115']}
        position={[-491.976, -25.6, -175.834]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part752.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.968, -22.4, -175.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part753.geometry}
        material={materials['mb:o:33:115']}
        position={[-489.571, -18.4, -151.838]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part754.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.968, -12.8, -151.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part755.geometry}
        material={materials['mb:o:33:119']}
        position={[-491.962, -25.6, -135.834]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part756.geometry}
        material={materials['mb:o:33:115']}
        position={[-491.957, -25.6, -119.834]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part757.geometry}
        material={materials['mb:o:33:119']}
        position={[-487.964, -19.2, -139.832]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part758.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.965, -16, -143.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part759.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.96, -19.2, -127.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part760.geometry}
        material={materials['mb:o:33:119']}
        position={[-487.991, -16, -35.832]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part761.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.94, -19.2, -71.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part762.geometry}
        material={materials['mb:o:33:119']}
        position={[-483.932, -16, -47.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part763.geometry}
        material={materials['mb:o:33:119']}
        position={[-484.019, -12.8, -95.842]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part764.geometry}
        material={materials['mb:o:33:119']}
        position={[-475.935, -12.8, -55.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part765.geometry}
        material={materials['mb:o:33:119']}
        position={[-496, -20, -11.835]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part766.geometry}
        material={materials['mb:o:33:119']}
        position={[-476.001, -12.8, -7.828]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part767.geometry}
        material={materials['mb:o:33:119']}
        position={[-472.002, -9.6, -3.827]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part768.geometry}
        material={materials['mb:o:33:119']}
        position={[-484, -6.4, -11.831]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part769.geometry}
        material={materials['mb:o:33:138']}
        position={[-447.953, -16, -139.849]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part770.geometry}
        material={materials['mb:o:33:119']}
        position={[-488.023, -16, -83.843]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part771.geometry}
        material={materials['mb:o:33:115']}
        position={[-404.016, -16, -159.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part772.geometry}
        material={materials['mb:o:33:138']}
        position={[-419.94, -28.8, -183.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part773.geometry}
        material={materials['mb:o:354:138']}
        position={[-451.939, -19.2, -179.85]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part774.geometry}
        material={materials['mb:o:354:138']}
        position={[-443.973, -19.2, -187.847]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part775.geometry}
        material={materials['mb:o:354:119']}
        position={[-412.022, -23.199, -180.652]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part776.geometry}
        material={materials['mb:o:354:119']}
        position={[-404.012, -6.4, -131.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part777.geometry}
        material={materials['mb:o:354:199']}
        position={[-404.012, -9.6, -147.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part778.geometry}
        material={materials['mb:o:354:119']}
        position={[-412.001, -9.6, -115.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part779.geometry}
        material={materials['mb:o:354:119']}
        position={[-412.809, -2.4, -99.85]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part780.geometry}
        material={materials['mb:o:354:119']}
        position={[-412.829, -2.4, -43.85]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part781.geometry}
        material={materials['mb:o:354:119']}
        position={[-412.001, -9.6, -67.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part782.geometry}
        material={materials['mb:o:354:119']}
        position={[-416.001, -0.8, -67.852]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part783.geometry}
        material={materials['mb:o:354:138']}
        position={[-419.975, -9.6, -75.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part784.geometry}
        material={materials['mb:o:354:138']}
        position={[-427.942, -12.8, -75.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part785.geometry}
        material={materials['mb:o:354:330']}
        position={[-419.936, -9.6, -59.858]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part786.geometry}
        material={materials['mb:o:354:119']}
        position={[-411.989, -9.6, -35.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part787.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.962, -9.6, -3.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part788.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.968, -6.4, -19.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part789.geometry}
        material={materials['mb:o:354:199']}
        position={[-403.968, -3.2, -19.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part790.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.987, 0, -75.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part791.geometry}
        material={materials['mb:o:354:115']}
        position={[-403.976, -3.2, -43.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part792.geometry}
        material={materials['mb:o:354:308']}
        position={[-492.002, -25.6, -3.834]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part793.geometry}
        material={materials['mb:o:354:119']}
        position={[-492.002, -19.2, -3.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part794.geometry}
        material={materials['mb:o:354:115']}
        position={[-495.991, -20, -35.835]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part795.geometry}
        material={materials['mb:o:354:119']}
        position={[-491.989, -25.6, -43.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part796.geometry}
        material={materials['mb:o:354:115']}
        position={[-499.933, -22.4, -51.831]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part797.geometry}
        material={materials['mb:o:354:115']}
        position={[-495.989, -16.8, -43.835]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part798.geometry}
        material={materials['mb:o:354:199']}
        position={[-491.975, -22.4, -171.834]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part799.geometry}
        material={materials['mb:o:354:115']}
        position={[-492.769, -18.4, -155.839]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part800.geometry}
        material={materials['mb:o:354:115']}
        position={[-495.972, -18.4, -147.84]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part801.geometry}
        material={materials['mb:o:354:119']}
        position={[-491.972, -25.6, -163.834]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part802.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.972, -22.4, -163.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part803.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.972, -16, -163.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part804.geometry}
        material={materials['mb:o:354:217']}
        position={[-475.967, -16, -147.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part805.geometry}
        material={materials['mb:o:354:115']}
        position={[-491.958, -22.4, -123.834]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part806.geometry}
        material={materials['mb:o:354:119']}
        position={[-484.015, -9.6, -27.825]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part807.geometry}
        material={materials['mb:o:354:119']}
        position={[-483.938, -12.8, -63.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part808.geometry}
        material={materials['mb:o:354:119']}
        position={[-492.015, -12.8, -27.828]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part809.geometry}
        material={materials['mb:o:354:119']}
        position={[-475.939, -12.8, -67.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part810.geometry}
        material={materials['mb:o:354:217']}
        position={[-467.967, -19.2, -147.842]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part811.geometry}
        material={materials['mb:o:354:115']}
        position={[-491.969, -16, -99.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part812.geometry}
        material={materials['mb:o:354:115']}
        position={[-488.012, -4, -19.824]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part813.geometry}
        material={materials['mb:o:354:119']}
        position={[-495.997, -19.2, -19.835]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part814.geometry}
        material={materials['mb:o:354:119']}
        position={[-492, -12.8, -11.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part815.geometry}
        material={materials['mb:o:354:119']}
        position={[-484.002, -12.8, -3.831]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part816.geometry}
        material={materials['mb:o:354:119']}
        position={[-403.996, 3.2, -99.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part817.geometry}
        material={materials['mb:o:274:119']}
        position={[-471.96, -28.8, -127.84]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part818.geometry}
        material={materials['mb:o:274:308']}
        position={[-423.96, -28.8, -127.857]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part819.geometry}
        material={materials['mb:o:400:138']}
        position={[-447.935, -12.8, -55.849]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part820.geometry}
        material={materials['mb:o:400:138']}
        position={[-455.921, -12.8, -15.846]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part821.geometry}
        material={materials['mb:o:400:138']}
        position={[-447.971, -19.2, -159.849]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part822.geometry}
        material={materials['mb:o:400:138']}
        position={[-455.949, -16, -95.846]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part823.geometry}
        material={materials['mb:o:356:308']}
        position={[-471.929, -28.8, -39.841]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part824.geometry}
        material={materials['mb:o:356:308']}
        position={[-423.929, -28.8, -39.857]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part825.geometry}
        material={materials['mb:o:38:138']}
        position={[-455.974, -28.8, -183.852]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part826.geometry}
        material={materials['mb:o:369:138']}
        position={[-455.977, -25.6, -175.852]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part827.geometry}
        material={materials['mb:o:223:25']}
        position={[-447.969, -22.4, -151.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part828.geometry}
        material={materials['mb:o:36:119']}
        position={[-491.996, -25.6, -23.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part829.geometry}
        material={materials['mb:o:36:119']}
        position={[-491.971, -25.6, -95.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part830.geometry}
        material={materials['mb:o:64:138']}
        position={[-427.932, -12.8, -47.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part831.geometry}
        material={materials['mb:o:64:138']}
        position={[-467.932, -12.8, -47.842]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part832.geometry}
        material={materials['mb:o:64:138']}
        position={[-435.935, -9.6, -55.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part833.geometry}
        material={materials['mb:o:64:138']}
        position={[-459.935, -9.6, -55.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part834.geometry}
        material={materials['mb:o:64:138']}
        position={[-427.924, -12.8, -23.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part835.geometry}
        material={materials['mb:o:64:138']}
        position={[-459.968, -16, -151.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part836.geometry}
        material={materials['mb:o:64:138']}
        position={[-467.971, -19.2, -159.842]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part837.geometry}
        material={materials['mb:o:64:138']}
        position={[-467.96, -16, -127.842]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part838.geometry}
        material={materials['mb:o:64:138']}
        position={[-427.949, -16, -95.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part839.geometry}
        material={materials['mb:o:64:27']}
        position={[-447.942, -16, -75.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part840.geometry}
        material={materials['mb:o:64:138']}
        position={[-459.946, -12.8, -87.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part841.geometry}
        material={materials['mb:o:64:27']}
        position={[-451.96, -16, -127.847]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part842.geometry}
        material={materials['mb:o:64:138']}
        position={[-431.978, -16, -139.846]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part843.geometry}
        material={materials['mb:o:64:138']}
        position={[-451.973, -16, -167.847]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part844.geometry}
        material={materials['mb:o:64:138']}
        position={[-439.978, -19.2, -179.852]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part845.geometry}
        material={materials['mb:o:64:138']}
        position={[-435.971, -22.4, -191.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part846.geometry}
        material={materials['mb:o:64:138']}
        position={[-479.975, -25.6, -203.829]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part847.geometry}
        material={materials['mb:o:64:138']}
        position={[-431.969, -16, -115.846]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part848.geometry}
        material={materials['mb:o:64:119']}
        position={[-411.974, -12.8, -127.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part849.geometry}
        material={materials['mb:o:64:119']}
        position={[-411.997, -9.6, -103.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part850.geometry}
        material={materials['mb:o:64:119']}
        position={[-411.978, -9.6, -47.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part851.geometry}
        material={materials['mb:o:64:138']}
        position={[-411.924, -9.6, -23.861]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part852.geometry}
        material={materials['mb:o:64:119']}
        position={[-491.968, -25.6, -151.834]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part853.geometry}
        material={materials['mb:o:64:119']}
        position={[-483.932, -12.8, -47.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part854.geometry}
        material={materials['mb:o:104:138']}
        position={[-427.939, -16, -67.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part855.geometry}
        material={materials['mb:o:104:119']}
        position={[-404.009, -6.4, -139.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part856.geometry}
        material={materials['mb:o:104:119']}
        position={[-412.012, -9.6, -147.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part857.geometry}
        material={materials['mb:o:104:138']}
        position={[-419.979, -9.6, -51.847]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part858.geometry}
        material={materials['mb:o:104:138']}
        position={[-419.978, -9.6, -67.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part859.geometry}
        material={materials['mb:o:104:138']}
        position={[-419.969, -12.8, -91.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part860.geometry}
        material={materials['mb:o:104:119']}
        position={[-403.99, 0, -83.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part861.geometry}
        material={materials['mb:o:104:115']}
        position={[-403.973, 0, -35.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part862.geometry}
        material={materials['mb:o:104:119']}
        position={[-499.178, -16.8, -75.836]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part863.geometry}
        material={materials['mb:o:104:119']}
        position={[-499.18, -24.8, -67.836]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part864.geometry}
        material={materials['mb:o:104:115']}
        position={[-483.975, -16, -155.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part865.geometry}
        material={materials['mb:o:104:119']}
        position={[-491.98, -12.8, -67.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part866.geometry}
        material={materials['mb:o:104:119']}
        position={[-483.978, -16, -75.831]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part867.geometry}
        material={materials['mb:o:104:138']}
        position={[-475.994, -12.8, -19.858]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part868.geometry}
        material={materials['mb:o:104:115']}
        position={[-491.997, -12.8, -19.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part869.geometry}
        material={materials['mb:o:9639:138']}
        position={[-447.966, -28.8, -207.849]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part870.geometry}
        material={materials['mb:o:203:138']}
        position={[-419.926, -12.8, -31.858]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part871.geometry}
        material={materials['mb:o:203:308']}
        position={[-403.972, -12.8, -31.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part872.geometry}
        material={materials['mb:o:203:138']}
        position={[-475.949, -16, -95.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part873.geometry}
        material={materials['mb:o:203:138']}
        position={[-419.949, -16, -95.858]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part874.geometry}
        material={materials['mb:o:203:25']}
        position={[-447.961, -25.6, -131.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part875.geometry}
        material={materials['mb:o:203:25']}
        position={[-447.959, -25.6, -123.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part876.geometry}
        material={materials['mb:o:203:25']}
        position={[-447.959, -22.4, -123.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part877.geometry}
        material={materials['mb:o:203:25']}
        position={[-447.939, -22.4, -67.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part878.geometry}
        material={materials['mb:o:203:25']}
        position={[-447.939, -25.6, -67.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part879.geometry}
        material={materials['mb:o:203:119']}
        position={[-411.986, -12.8, -71.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part880.geometry}
        material={materials['mb:o:203:119']}
        position={[-403.975, -9.6, -39.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part881.geometry}
        material={materials['mb:o:203:308']}
        position={[-483.949, -25.6, -95.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part882.geometry}
        material={materials['mb:o:2:138']}
        position={[-451.969, -12.8, -91.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part883.geometry}
        material={materials['mb:o:2:138']}
        position={[-419.936, -25.6, -171.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part884.geometry}
        material={materials['mb:o:2:138']}
        position={[-411.991, -12.8, -27.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part885.geometry}
        material={materials['mb:o:2:119']}
        position={[-404.004, -12.8, -123.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part886.geometry}
        material={materials['mb:o:2:119']}
        position={[-404.009, -16, -139.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part887.geometry}
        material={materials['mb:o:2:119']}
        position={[-412.02, -19.2, -171.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part888.geometry}
        material={materials['mb:o:2:330']}
        position={[-412.009, -16, -139.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part889.geometry}
        material={materials['mb:o:2:119']}
        position={[-404.012, -12.8, -147.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part890.geometry}
        material={materials['mb:o:2:119']}
        position={[-403.99, -6.4, -83.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part891.geometry}
        material={materials['mb:o:2:119']}
        position={[-403.982, 3.2, -59.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part892.geometry}
        material={materials['mb:o:2:119']}
        position={[-491.98, -25.6, -67.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part893.geometry}
        material={materials['mb:o:2:119']}
        position={[-483.964, -25.6, -139.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part894.geometry}
        material={materials['mb:o:2:115']}
        position={[-483.961, -22.4, -131.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part895.geometry}
        material={materials['mb:o:2:119']}
        position={[-484.018, -16, -99.825]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part896.geometry}
        material={materials['mb:o:2:138']}
        position={[-475.989, -12.8, -35.858]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part897.geometry}
        material={materials['mb:o:2:115']}
        position={[-412.018, -16, -163.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part898.geometry}
        material={materials['mb:o:37:119']}
        position={[-403.991, -12.8, -87.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part899.geometry}
        material={materials['mb:o:37:138']}
        position={[-475.968, -19.2, -151.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part900.geometry}
        material={materials['mb:o:37:138']}
        position={[-447.97, -28.8, -195.849]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part901.geometry}
        material={materials['mb:o:37:115']}
        position={[-419.968, -19.2, -151.858]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part902.geometry}
        material={materials['mb:o:37:119']}
        position={[-403.994, -9.6, -95.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part903.geometry}
        material={materials['mb:o:37:119']}
        position={[-404.022, -3.2, -103.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part904.geometry}
        material={materials['mb:o:37:308']}
        position={[-483.946, -22.4, -87.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part905.geometry}
        material={materials['mb:o:210:138']}
        position={[-455.939, -16, -67.846]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part906.geometry}
        material={materials['mb:o:210:115']}
        position={[-404.022, 0, -103.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part907.geometry}
        material={materials['mb:o:210:119']}
        position={[-403.983, -3.2, -63.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part908.geometry}
        material={materials['mb:o:210:119']}
        position={[-403.98, 0, -55.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part909.geometry}
        material={materials['mb:o:210:119']}
        position={[-483.973, -19.2, -159.836]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part910.geometry}
        material={materials['mb:o:210:119']}
        position={[-484.019, -19.2, -95.825]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part911.geometry}
        material={materials['mb:o:210:119']}
        position={[-484.016, -12.8, -23.825]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part912.geometry}
        material={materials['mb:o:30:138']}
        position={[-423.972, -12.8, -83.84]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part913.geometry}
        material={materials['mb:o:30:119']}
        position={[-483.938, -16, -63.836]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part914.geometry}
        material={materials['mb:o:30:119']}
        position={[-480, -9.6, -11.829]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part915.geometry}
        material={materials['mb:o:103:308']}
        position={[-407.955, -16, -23.852]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part916.geometry}
        material={materials['mb:o:103:138']}
        position={[-447.964, -19.2, -135.849]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part917.geometry}
        material={materials['mb:o:103:138']}
        position={[-479.966, -25.6, -175.829]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part918.geometry}
        material={materials['mb:o:103:308']}
        position={[-408.013, -25.6, -151.852]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part919.geometry}
        material={materials['mb:o:149:308']}
        position={[-407.978, -16, -87.852]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part920.geometry}
        material={materials['mb:o:3:138']}
        position={[-459.939, -9.6, -67.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part921.geometry}
        material={materials['mb:o:3:138']}
        position={[-459.922, -9.6, -19.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part922.geometry}
        material={materials['mb:o:3:138']}
        position={[-451.917, -9.6, -3.847]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part923.geometry}
        material={materials['mb:o:3:330']}
        position={[-451.928, -9.6, -35.847]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part924.geometry}
        material={materials['mb:o:3:27']}
        position={[-443.922, -9.6, -19.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part925.geometry}
        material={materials['mb:o:3:330']}
        position={[-443.939, -9.6, -67.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part926.geometry}
        material={materials['mb:o:3:138']}
        position={[-427.936, -12.8, -59.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part927.geometry}
        material={materials['mb:o:3:119']}
        position={[-475.933, -9.6, -51.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part928.geometry}
        material={materials['mb:o:3:25']}
        position={[-443.975, -16, -171.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part929.geometry}
        material={materials['mb:o:3:330']}
        position={[-475.975, -16, -171.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part930.geometry}
        material={materials['mb:o:3:330']}
        position={[-459.964, -12.8, -139.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part931.geometry}
        material={materials['mb:o:3:27']}
        position={[-427.975, -19.2, -171.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part932.geometry}
        material={materials['mb:o:3:27']}
        position={[-459.95, -12.8, -99.845]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part933.geometry}
        material={materials['mb:o:3:138']}
        position={[-443.955, -12.8, -115.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part934.geometry}
        material={materials['mb:o:3:25']}
        position={[-427.953, -16, -107.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part935.geometry}
        material={materials['mb:o:3:27']}
        position={[-435.944, -16, -83.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part936.geometry}
        material={materials['mb:o:3:27']}
        position={[-467.955, -16, -115.842]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part937.geometry}
        material={materials['mb:o:3:27']}
        position={[-427.967, -19.2, -147.856]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part938.geometry}
        material={materials['mb:o:3:330']}
        position={[-451.98, -19.2, -187.847]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part939.geometry}
        material={materials['mb:o:3:330']}
        position={[-419.967, -16, -147.858]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part940.geometry}
        material={materials['mb:o:3:138']}
        position={[-423.972, -9.6, -83.84]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part941.geometry}
        material={materials['mb:o:3:119']}
        position={[-403.962, -3.2, -3.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part942.geometry}
        material={materials['mb:o:3:199']}
        position={[-411.987, 0, -75.85]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part943.geometry}
        material={materials['mb:o:3:115']}
        position={[-419.98, -25.6, -187.858]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part944.geometry}
        material={materials['mb:o:3:119']}
        position={[-495.967, -20, -107.835]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part945.geometry}
        material={materials['mb:o:3:119']}
        position={[-484.002, -9.6, -3.831]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part946.geometry}
        material={materials['mb:o:3:138']}
        position={[-435.955, -16, -131.845]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part947.geometry}
        material={materials['mb:o:544:25']}
        position={[-447.926, -16, -31.849]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part948.geometry}
        material={materials['mb:o:544:25']}
        position={[-447.949, -19.2, -95.849]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part949.geometry}
        material={materials['mb:o:164:308']}
        position={[-455.964, -25.6, -7.849]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part950.geometry}
        material={materials['mb:o:655:115']}
        position={[-484.012, -9.6, -19.825]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part951.geometry}
        material={materials['mb:o:357:115']}
        position={[-404.012, -3.2, -131.85]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part952.geometry}
        material={materials['mb:o:357:119']}
        position={[-403.993, 3.2, -91.853]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part953.geometry}
        material={materials['mb:o:357:119']}
        position={[-499.189, -16.8, -43.836]}
        rotation={[-Math.PI, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part954.geometry}
        material={materials['mb:o:357:199']}
        position={[-484.018, -9.6, -35.825]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part955.geometry}
        material={materials['mb:o:357:115']}
        position={[-491.978, -12.8, -75.831]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part956.geometry}
        material={materials['mb:o:81:141']}
        position={[-459.931, -9.6, -43.845]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part957.geometry}
        material={materials['mb:o:81:141']}
        position={[-443.928, -9.6, -51.839]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part958.geometry}
        material={materials['mb:o:81:141']}
        position={[-435.928, -12.8, -19.842]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part959.geometry}
        material={materials['mb:o:81:330']}
        position={[-443.933, -12.8, -35.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part960.geometry}
        material={materials['mb:o:81:141']}
        position={[-459.967, -12.8, -131.834]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part961.geometry}
        material={materials['mb:o:81:141']}
        position={[-435.947, -16, -91.853]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part962.geometry}
        material={materials['mb:o:81:330']}
        position={[-459.942, -12.8, -75.845]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part963.geometry}
        material={materials['mb:o:81:141']}
        position={[-443.953, -12.8, -91.839]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part964.geometry}
        material={materials['mb:o:81:141']}
        position={[-451.969, -16, -155.847]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part965.geometry}
        material={materials['mb:o:81:141']}
        position={[-451.983, -22.4, -195.847]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part966.geometry}
        material={materials['mb:o:81:119']}
        position={[-412.022, -23.199, -183.852]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part967.geometry}
        material={materials['mb:o:81:119']}
        position={[-411.958, -12.8, -155.867]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part968.geometry}
        material={materials['mb:o:81:199']}
        position={[-411.998, -3.2, -115.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part969.geometry}
        material={materials['mb:o:81:115']}
        position={[-412.807, -2.4, -107.85]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part970.geometry}
        material={materials['mb:o:81:119']}
        position={[-412.826, -2.4, -51.85]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part971.geometry}
        material={materials['mb:o:81:115']}
        position={[-420.012, -6.4, -75.853]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part972.geometry}
        material={materials['mb:o:81:119']}
        position={[-407.991, -0.8, -27.835]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part973.geometry}
        material={materials['mb:o:81:115']}
        position={[-403.98, -3.2, -11.831]}
        rotation={[Math.PI / 2, 0, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part974.geometry}
        material={materials['mb:o:81:119']}
        position={[-419.989, -22.4, -179.836]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part975.geometry}
        material={materials['mb:o:81:119']}
        position={[-419.953, -12.8, -139.839]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part976.geometry}
        material={materials['mb:o:81:119']}
        position={[-495.994, -20, -27.835]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part977.geometry}
        material={materials['mb:o:81:119']}
        position={[-492.002, -16, -3.834]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part978.geometry}
        material={materials['mb:o:81:119']}
        position={[-495.975, -20, -83.835]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part979.geometry}
        material={materials['mb:o:81:115']}
        position={[-499.183, -24.8, -59.836]}
        rotation={[-Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part980.geometry}
        material={materials['mb:o:81:119']}
        position={[-499.933, -19.2, -51.831]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part981.geometry}
        material={materials['mb:o:81:119']}
        position={[-491.967, -22.4, -163.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part982.geometry}
        material={materials['mb:o:81:119']}
        position={[-475.964, -16, -139.839]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part983.geometry}
        material={materials['mb:o:81:199']}
        position={[-491.958, -22.4, -115.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part984.geometry}
        material={materials['mb:o:81:119']}
        position={[-491.991, -12.8, -35.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part985.geometry}
        material={materials['mb:o:81:119']}
        position={[-475.947, -12.8, -91.839]}
        rotation={[Math.PI / 2, 0, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part986.geometry}
        material={materials['mb:o:81:119']}
        position={[-491.972, -16, -91.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part987.geometry}
        material={materials['mb:o:81:119']}
        position={[-480.012, -4, -19.827]}
        rotation={[-Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part988.geometry}
        material={materials['mb:o:81:115']}
        position={[-483.994, -6.4, -27.831]}
        rotation={[Math.PI / 2, 0, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part989.geometry}
        material={materials['mb:o:163:119']}
        position={[-411.993, -9.6, -91.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part990.geometry}
        material={materials['mb:o:163:119']}
        position={[-411.996, -9.6, -83.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part991.geometry}
        material={materials['mb:o:163:115']}
        position={[-412.001, -6.4, -67.85]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part992.geometry}
        material={materials['mb:o:163:115']}
        position={[-403.991, -6.4, -27.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part993.geometry}
        material={materials['mb:o:163:119']}
        position={[-491.989, -22.4, -43.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part994.geometry}
        material={materials['mb:o:163:199']}
        position={[-491.983, -22.4, -59.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part995.geometry}
        material={materials['mb:o:163:119']}
        position={[-491.98, -22.4, -67.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part996.geometry}
        material={materials['mb:o:163:119']}
        position={[-491.978, -22.4, -75.834]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part997.geometry}
        material={materials['mb:o:802:119']}
        position={[-404, -9.6, -127.847]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part998.geometry}
        material={materials['mb:o:802:119']}
        position={[-404.008, -6.4, -103.847]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part999.geometry}
        material={materials['mb:o:802:115']}
        position={[-404.027, -6.4, -47.847]}
        rotation={[Math.PI / 2, 0, 1.571]}
      />
    </group>
  );
}

useGLTF.preload(legoScene);

export default Lego;
