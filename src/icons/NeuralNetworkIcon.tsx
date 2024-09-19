import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NeuralNetworkIcon({
  iconName = 'neural-network',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
