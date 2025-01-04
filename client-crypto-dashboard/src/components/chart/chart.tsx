// filepath: /Users/aidasb/Documents/Real-Time Cryptocurrency Dashboard/client-crypto-dashboard/src/Chart.tsx
import { useRef, useEffect, FC } from 'react';
import * as d3 from 'd3';

type CurrencyPairData = {
  e: 'trade'; // Event type
  E: number; // Event time
  s: string; // Symbol
  t: number; // Trade ID
  p: string; // Price
  q: string; // Quantity
  T: number; // Trade time
  m: boolean; // Is the buyer the market maker?
  M: boolean; // Ignore
};

type ChartProps = {
  data: CurrencyPairData[];
};

const Chart: FC<ChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr('width', 800)
      .attr('height', 400)
      .style('background', '#f0f0f0')
      .style('margin-top', '50')
      .style('overflow', 'visible');

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 800]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d) as unknown as number])
      .range([400, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append('g').call(xAxis).attr('transform', 'translate(0, 400)');

    svg.append('g').call(yAxis);

    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr(
        'd',
        d3
          .line<number>()
          .x((_d, i) => xScale(i))
          .y(yScale),
      )
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default Chart;
