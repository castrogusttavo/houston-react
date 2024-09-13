import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MarketAnalysisIcon({
  iconName = 'market-analysis',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
