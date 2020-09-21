
(function(){
  var toJson = function(res){ return res.json(); };

   var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),
        elements: fetch('data.json').then(toJson),

        layout: {
          name: 'circle'
          },

        style: [
          {
            selector: 'node',
            style: {
              width: 'label',
                shape: 'round-rectangle',
                'background-color': '#ffccff',
                label: 'data(id)',
                'text-valign': 'center',
                'text-halign': 'center'
            }
          },
          {
            selector: 'edge',
            style: {
               label: 'data(id)',
               'target-arrow-shape': 'triangle',
               'curve-style': 'bezier',
               'text-background-color': '#f0f0f0',
               'text-background-opacity': 1
            }
          },
          ],      
      });
})();
