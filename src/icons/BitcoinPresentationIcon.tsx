import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BitcoinPresentationIcon({
  iconName = 'bitcoin-presentation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
