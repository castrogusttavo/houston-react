import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GreekHelmetIcon({
  iconName = 'greek-helmet',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
