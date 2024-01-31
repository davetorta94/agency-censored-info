import Atropos from 'atropos/react';

export const AtroposComponent = () => {
    return (
        <div id="app">
          {/* Atropos */}
          <Atropos
              activeOffset={40}
              shadowScale={1.05}
              onEnter={() => console.log('Enter')}
              onLeave={() => console.log('Leave')}
              onRotate={(x, y) => console.log('Rotate', x, y)}
            >
        {/* ... */}
         </Atropos>
        </div>
      )
}

